import {Request, Response} from "express";
import UserRepository from "repository/user.repo";
import Email from "modules/email";
import JWT from "modules/jwt";
import User from "model/User.model";
import Password from "modules/password";
import CONFIG from "config";
import fs from "fs";
import Cases, {CaseStatus} from "model/Cases.model";
import path from "path";
import { Types } from "mongoose";

interface IUserAPI {
  getUsers: (req: Request, res: Response) => Promise<Response>;
  addUser: (req: Request, res: Response) => Promise<Response>;
  updateUser: (req: Request, res: Response) => Promise<Response>;
  deleteUser: (req: Request, res: Response) => Promise<Response>;
  verifyUser: (req: Request, res: Response) => Promise<Response>;
}


export default class UserAPI implements IUserAPI {
  private static instance: UserAPI = new this();
  private template: string = fs.readFileSync(path.join(__dirname, "../../../templates/welcome.html"), "utf8");
  private constructor() {}
  public static get view(): UserAPI {
    return this.instance;
  }

  private repo = UserRepository.repo;
  private emailService = Email.fn;
  private jwtService = JWT.fn;

  public getUsers = async (req: Request, res: Response) : Promise<Response> => {
    try {
      const users = await this.repo.list(req.query);
      return res.status(200).json({
        users,
        meta: {
          page: req.query.page,
          limit: req.query.limit,
          count: await this.repo.count(req.query),
        },
      });
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  public addUser = async (req: Request, res: Response) : Promise<Response> => {
    try {
      const user = await this.repo.create(req.body);
      const token = this.jwtService.getEmailVerificationToken(user.email);

      const link = `${CONFIG.CLIENT_URL}/?token=${token}`;

      await this.emailService.sendEmail(
        user.email,
        "Verify your email for Abasca",
        this.template.replace("{{link}}", link).replace("{{name}}", user.fullName || "User")
      );

      return res.status(200).json(user);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  }

  public updateUser = async (req: Request, res: Response) : Promise<Response> => {
    try {
      const user = await this.repo.update(req.body);

      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  public deleteUser = async (req: Request, res: Response) : Promise<Response> => {
    try {
      const user = await this.repo.delete(req.params.id);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  public verifyUser = async (req: Request, res: Response) : Promise<Response> => {
    try {
      const {token, password} = req.body;
      const { email } = this.jwtService.verifyEmailVerificationToken(token);
      const user = await this.repo.getByEmail(email);
      if (!user) throw new Error("User not found");

      let updatedUser = user;
      await User.updateOne({
        _id: updatedUser._id
      }, {
        $set: {
          isVerified: true,
          password: Password.fn.generateHash(password)
        }
      });
      const { user: resUser, token: resToken } = await this.repo.authenticate(email, password);
      return res.status(200).json({ userId: resUser._id?.toString(), token: resToken });
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  }

  public selfDetails = async (req: Request, res: Response) : Promise<Response> => {
    try {
      const user = await this.repo.get(res.locals.user.id);
      const pdCompleted = await Cases.countDocuments({assignTo: new Types.ObjectId(res.locals.user.id), status: CaseStatus.Completed});
      const pdPending = await Cases.countDocuments({assignTo: new Types.ObjectId(res.locals.user.id), status: CaseStatus.Assigned});
      const accuracy = pdCompleted / (pdCompleted + pdPending);
      return res.status(200).json({...user!.toJSON(), analysis: {pdCompleted, pdPending, accuracy}});
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  public selfUpdate = async (req: Request, res: Response) : Promise<Response> => {
    try {
      const { id } = res.locals.user;
      const {about, profile, firebaseTokens} = req.body;
      let payload: {_id: string, about?: string, profile?: string, firebaseTokens?: string[]} = {_id: id};
      const existingUser = await this.repo.get(id);
      if (about) payload.about = about;
      if (profile) payload.profile = profile;
      if (firebaseTokens) payload.firebaseTokens = existingUser?.firebaseTokens?.filter((token) => !firebaseTokens.includes(token)).concat(firebaseTokens) || firebaseTokens;
      const user = await this.repo.update(payload as any);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}


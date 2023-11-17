import {Request, Response} from "express";
import UserRepository from "repository/user.repo";
import Email from "modules/email";
import JWT from "modules/jwt";

interface IUserAPI {
  getUsers: (req: Request, res: Response) => Promise<Response>;
  addUser: (req: Request, res: Response) => Promise<Response>;
  updateUser: (req: Request, res: Response) => Promise<Response>;
  deleteUser: (req: Request, res: Response) => Promise<Response>;
  verifyUser: (req: Request, res: Response) => Promise<Response>;
}


export default class UserAPI implements IUserAPI {
  private static instance: UserAPI = new this();
  private constructor() {}
  public static get view(): UserAPI {
    return this.instance;
  }

  private repo = UserRepository.repo;
  private emailService = Email.fn;
  private jwtService = JWT.fn;

  public getUsers = async (_: Request, res: Response) : Promise<Response> => {
    try {
      const users = await this.repo.list();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  public addUser = async (req: Request, res: Response) : Promise<Response> => {
    try {
      const user = await this.repo.create(req.body);
      const token = this.jwtService.getEmailVerificationToken(user.email);

      await this.emailService.sendEmail(
        user.email,
        "Verify your email",
        `Please click this link to verify your email: ${process.env.CLIENT_URL}/verify-email/${token}`
      );

      return res.status(200).json(user);
    } catch (e) {
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
      const { email } = this.jwtService.verifyEmailVerificationToken(req.params.token);
      const user = await this.repo.getByEmail(email);
      if (!user) throw new Error("User not found");

      let updatedUser = user;
      updatedUser.isVerified = true;
      updatedUser = await this.repo.update(updatedUser);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  public selfDetails = async (req: Request, res: Response) : Promise<Response> => {
    try {
      const user = await this.repo.get(res.locals.user.id);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  public selfUpdate = async (req: Request, res: Response) : Promise<Response> => {
    try {
      const { id } = res.locals.user;
      const {about, profile} = req.body;
      let payload: {_id: string, about?: string, profile?: string} = {_id: id};
      if (about) payload.about = about;
      if (profile) payload.profile = profile;
      const user = await this.repo.update(payload as any);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}


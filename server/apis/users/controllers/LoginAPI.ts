import { Request, Response } from "express";
import UserRepository from "repository/user.repo";

interface Body {
  email: string;
  password: string;
}

export default class LoginAPI {
  private static _instance: LoginAPI = new this();
  private constructor() {}
  public static get view(): LoginAPI {
    return this._instance;
  }
  private userRepo = UserRepository.repo;

  public login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { email, password }: Body = req.body;
      try {
        const { user, token } = await this.userRepo.authenticate(
          email,
          password
        );
        return res.status(200).json({ user, token });
      } catch (error: any) {
        console.log(error);
        return res.status(401).json({ message: error.message });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "something went wrong" });
    }
  };
}

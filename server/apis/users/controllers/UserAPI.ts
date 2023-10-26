import {Request, Response} from "express";
import UserRepository from "repository/user.repo";

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
  public static get views(): UserAPI {
    return this.instance;
  }

  private repo = UserRepository.repo;

}


import {Request, Response} from "express";
import RoleRepository from "repository/role.repo";

interface IRole {
  get: (req: Request, res: Response) => Promise<Response>;
  create: (req: Request, res: Response) => Promise<Response>;
  update: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;
}

export default class RolesAPI implements IRole {
  private static instance: RolesAPI = new this();
  private constructor() {}
  public static get view(): RolesAPI {
    return this.instance;
  }
  private repo = RoleRepository.repo;

  public get = async (_: Request, res: Response): Promise<Response> => {
    try {
      const roles = await this.repo.list();
      return res.status(200).json(roles);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const role = await this.repo.create(req.body);
      return res.status(200).json(role);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const role = await this.repo.update(req.body);
      return res.status(200).json(role);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id;
      const role = await this.repo.delete(id);
      return res.status(200).json(role);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

}




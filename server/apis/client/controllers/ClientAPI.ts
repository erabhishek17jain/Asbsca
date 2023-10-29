import {Request, Response} from "express";
import ClientRepository from "repository/client.repo";


interface IClientAPI {
  list: (req: Request, res: Response) => Promise<Response>;
  create: (req: Request, res: Response) => Promise<Response>;
  update: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;
}

export default class ClientAPI implements IClientAPI {
  private static instance: ClientAPI = new this();
  private constructor() { }
  public static get view(): ClientAPI {
    return this.instance;
  }
  private repo = ClientRepository.repo;

  public list = async (_: Request, res: Response): Promise<Response> => {
    try {
      const data = await this.repo.list();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await this.repo.create(req.body);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await this.repo.update(req.body);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await this.repo.delete(req.params.id);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}


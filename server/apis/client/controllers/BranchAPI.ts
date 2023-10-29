import BranchRepository from "repository/branch.repo";
import { Request, Response } from "express";

interface IBranchAPI {
  list: (req: Request, res: Response) => Promise<Response>;
  create: (req: Request, res: Response) => Promise<Response>;
  update: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;
}


export default class BranchAPI implements IBranchAPI {
  private static instance: BranchAPI = new this();
  private branchRepo: BranchRepository = BranchRepository.repo;
  private constructor() {}
  public static get view(): BranchAPI {
    return this.instance;
  }

  public list = async (_: Request, res: Response): Promise<Response> => {
    try {
      const branches = await this.branchRepo.list();
      return res.status(200).json(branches);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const branch = await this.branchRepo.create(req.body);
      return res.status(200).json(branch);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const branch = await this.branchRepo.update(req.body);
      return res.status(200).json(branch);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const branch = await this.branchRepo.delete(req.params.id);
      return res.status(200).json(branch);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

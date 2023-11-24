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

  public list = async (req: Request, res: Response): Promise<Response> => {
    try {
      const branches = await this.branchRepo.list(req.query);
      const count = await this.branchRepo.count(req.query);
      return res.status(200).json({
        branches,
        meta: {
          page: req.query.page,
          limit: req.query.limit,
          count,
        },
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  public get = async (req: Request, res: Response): Promise<Response> => {
    try {
      const branch = await this.branchRepo.get(req.params.id);
      return res.status(200).json(branch);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

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

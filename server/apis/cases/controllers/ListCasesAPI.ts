import { Request, Response } from "express";
import CaseRepository from "repository/cases.repo";

interface IListAPI {
  get: (req: Request, res: Response) => Promise<Response>;
}

export default class ListCasesAPI implements IListAPI {
  private static instance: ListCasesAPI = new this();
  private constructor() {}
  public static get api(): ListCasesAPI {
    return this.instance;
  }

  public get = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { query } = req;
      const cases = await CaseRepository.repo.list(query);
      const count = await CaseRepository.repo.count(query);
      return res.status(200).json({
        cases,
        meta: {
          ...query,
          count,
        },
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
}

import { Request, Response } from "express";
import CaseRepository from "repository/cases.repo";

export default class AddCasesAPI {
    private static instance: AddCasesAPI = new this();
    private constructor() {}
    public static get api(): AddCasesAPI {
        return this.instance;
    }

    private repo = CaseRepository.repo;

    private validate = (req: Request): boolean => {
        const { body } = req;
        for ( let data of body ) {
            const { name, address, mobile, loanAmount, referenceId, localOrOGL, city, branch, type, bankName } = data;
            if (!name || !address || !mobile || !loanAmount || !referenceId || !localOrOGL || !city || !branch || !type || !bankName) {
                return false;
            }
        }
        return true;
    }

    public post = async (req: Request, res: Response): Promise<Response> => {
        try {
            if (!this.validate(req)) {
                return res.status(400).json({message: "Invalid request"});
            }
            const { body } = req;
            const cases = await this.repo.create(body);
            return res.status(200).json(cases);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}


import { Request, Response } from "express";
import Cases from "model/Cases.model";
import { Types } from "mongoose";


export default class UpdateDeleteCaseAPI {
    private static instance: UpdateDeleteCaseAPI = new this();
    private constructor() {}
    public static get api(): UpdateDeleteCaseAPI {
        return this.instance;
    }

    private model = Cases;

    public update = async (req: Request, res: Response): Promise<Response> => {
        try {
            let { body } = req;
            delete body._id;
            delete body.reviewerId;
            delete body.assigneeId;
            const { id } = req.params;
            const updatedCase = await this.model.findOneAndUpdate({_id: new Types.ObjectId(id)}, {$set: body}, { new: true });
            return res.status(200).json(updatedCase);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const deletedCase = await this.model.findOneAndDelete({_id: new Types.ObjectId(id)});
            return res.status(200).json(deletedCase);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

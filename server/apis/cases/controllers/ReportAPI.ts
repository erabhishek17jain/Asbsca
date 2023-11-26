import ReportRepository from "repository/report.repo";
import { Request, Response } from "express";
import { Types } from "mongoose";

export default class ReportAPI {
    private static instance = new this();
    private constructor() {}
    public static get api() {
        return this.instance;
    }

    private repo = ReportRepository.repo;

    public post = async (req: Request, res: Response): Promise<Response> => {
        try {
            let { caseId, data } = req.body;
            const existingReport = await this.repo.getByCaseId(caseId);
            if (existingReport) {
                return res.status(400).json({ message: "Report already exists" });
            }
            caseId = new Types.ObjectId(caseId);
            const report = await this.repo.create({ caseId, data } as any);
            return res.status(200).json(report);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    public get = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { caseId } = req.params;
            const report = await this.repo.getByCaseId(caseId);
            if (!report) {
                return res.status(404).json({ message: "Report not found" });
            }
            return res.status(200).json(report);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    public put = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { caseId } = req.params;
            const { data } = req.body;
            const report = await this.repo.getByCaseId(caseId);
            if (!report) {
                return res.status(404).json({ message: "Report not found" });
            }
            const updatedReport = await this.repo.update({ _id: report._id, data } as any);
            return res.status(200).json(updatedReport);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}

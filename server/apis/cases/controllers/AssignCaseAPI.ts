import { Request, Response } from "express";
import CaseRepository from "repository/cases.repo";
import Email from "modules/email";
import UserRepository from "repository/user.repo";

export default class AssignCaseAPI {
    private static instance: AssignCaseAPI = new AssignCaseAPI();
    private constructor() {}
    public static get api() {
        return this.instance;
    }

    private repo = CaseRepository.repo;
    private email = Email.fn;

    public assign = async (req: Request, res: Response) => {
        try {
            const { caseId, assigneeId, reviewerId } = req.body;

            const assignee = await UserRepository.repo.get(assigneeId);
            const reviewer = await UserRepository.repo.get(reviewerId);
            if (!assignee || !reviewer) {
                return res.status(400).json({ message: "Invalid user id." });
            }
            let updatedCase = await this.repo.assignCase(caseId, assigneeId, "user");
            updatedCase = await this.repo.assignCase(caseId, reviewerId, "reviewer"); 
            const subject = "Case assigned";
            const body = `A case has been assigned to you. Please login to your account to view the case.`;
            await this.email.sendEmail(assignee.email, subject, body);
            await this.email.sendEmail(reviewer.email, subject, body);
            res.status(200).json(updatedCase);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}

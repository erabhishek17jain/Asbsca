import { Request, Response } from "express";
import CaseRepository from "repository/cases.repo";
import Email from "modules/email";
import UserRepository from "repository/user.repo";
import fs from "fs";
import path from "path";
import CONFIG from "config";
import FirebaseNotification from "modules/Notification";

export default class AssignCaseAPI {
    private static instance: AssignCaseAPI = new AssignCaseAPI();
    private template: string = fs.readFileSync(path.join(__dirname, "../../../templates/assigned-review.html"), "utf8");
    private constructor() {}
    public static get api() {
        return this.instance;
    }

    private repo = CaseRepository.repo;
    private email = Email.fn;
    private notification = FirebaseNotification.fn;

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
            const loginLink = `${CONFIG.CLIENT_URL}/dashboard`;
            const subject = `You have been assigned a case`;
            const assigneeBody = this.template.replace("{{name}}", assignee.fullName || "User").replace("{{link}}", loginLink);
            const reviewerBody = this.template.replace("{{name}}", reviewer.fullName || "User").replace("{{link}}", loginLink);

            let tokens: string[] = [];
            if (assignee.email === reviewer.email) {
                tokens = [...assignee.firebaseTokens || []];
            } else {
                tokens = [...assignee.firebaseTokens || [], ...reviewer.firebaseTokens || []];
            }

            await this.notification.sendNotification({
                title: "New case assigned",
                body: "You have been assigned a new case",
                tokens,
            });

            if (assignee.email === reviewer.email) {
                await this.email.sendEmail(assignee.email, subject, assigneeBody);
                return res.status(200).json(updatedCase);
            }
            await this.email.sendEmail(assignee.email, subject, assigneeBody);
            await this.email.sendEmail(reviewer.email, subject, reviewerBody);
            
            res.status(200).json(updatedCase);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}

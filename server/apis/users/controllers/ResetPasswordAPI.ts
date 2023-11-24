import { Request, Response } from "express";
import UserRepository from "repository/user.repo";
import JWT from "modules/jwt";
import CONFIG from "config";
import fs from "fs";
import path from "path";
import Email from "modules/email";

export default class ResetPasswordAPI {
    private static _instance: ResetPasswordAPI = new this();
    private constructor() { }
    public static get view(): ResetPasswordAPI {
        return this._instance;
    }

    private jwtService = JWT.fn;
    private repo = UserRepository.repo;
    private emailService = Email.fn;
    private template = fs.readFileSync(path.join(__dirname, "../../../templates/forgot-passowrd.html"), "utf8");

    public post = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { email } = req.body;
            const user = await this.repo.getByEmail(email);
            if (!user) return res.status(404).json({ message: "User not found" });
            const token = this.jwtService.getEmailVerificationToken(user.email);

            const link = `${CONFIG.CLIENT_URL}/?token=${token}`;
            const template = this.template.replace("{{link}}", link).replace("{{name}}", user.fullName || "User");

            await this.emailService.sendEmail(
                user.email,
                "Reset your password for Abasca",
                template
            );

            return res.status(200).json({ message: "Email sent" });
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }
}

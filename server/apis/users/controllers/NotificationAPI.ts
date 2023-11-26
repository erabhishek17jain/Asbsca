import { Request, Response } from "express";
import Notification from "model/Notification.model";
import { Types } from "mongoose";


export default class NotificationAPI {
    private static instance = new this();
    private constructor() {}
    public static get view() {
        return this.instance;
    }

    private model = Notification;

    public get = async (req: Request, res: Response): Promise<Response> => {
        try {
            const user = new Types.ObjectId(res.locals.user._id);
            const { page, limit } = req.query;
            const skip = Number(page) * Number(limit);
            const notifications = await this.model.find({ user: user }).sort({ createdAt: -1 }).skip(skip).limit(Number(limit));
            const total = await this.model.countDocuments({ user: user });
            return res.status(200).json({ notifications, meta: { page, limit, total } });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

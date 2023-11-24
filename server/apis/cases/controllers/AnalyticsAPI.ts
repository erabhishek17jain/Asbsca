import { Request, Response } from "express";
import Cases, {ICases} from "model/Cases.model";
import dayjs from "dayjs";
import CONFIG from "config";


export default class AnalyticsAPI {
    private static instance = new this();
    private constructor() {}
    public static get api() {
        return this.instance;
    }

    private model = Cases;

    private getProductiveUsers = async () => {
        return []
    }

    public get = async (req: Request, res: Response): Promise<Response> => {
        try {
            let { startDate, endDate } = req.query;
            const currentUser = res.locals.user;
            if (!startDate) {
                startDate = dayjs().subtract(1, "month").format("YYYY-MM-DD");
            }
            if (!endDate) {
                endDate = dayjs().format("YYYY-MM-DD");
            }
            let filter: { [key: string]: any } = {
                assignTo: { $ne: null },
                createdAt: {
                    $gte: dayjs(String(startDate)).startOf("day").toDate(),
                    $lte: dayjs(String(endDate)).endOf("day").toDate(),
                },
            };

            if (currentUser.role !== CONFIG.ADMIN_ROLE_ID) {
                filter = {
                    ...filter,
                    $or: [
                        { assignTo: currentUser.id },
                        { reviewer: currentUser.id },
                    ],
                };
            }

            const cases = await this.model.find(filter).sort({ createdAt: -1 });

            const assignedCases = cases.filter((c: ICases) => c.assignTo).length;
            const reviewedCases = cases.filter((c: ICases) => c.isReviewed).length;
            const sentToBank = cases.filter((c: ICases) => c.isSentToBank).length;
            const topFiveCases = cases.slice(0, 5);
            if (currentUser.role === CONFIG.ADMIN_ROLE_ID) {
                let productiveUsers = await this.getProductiveUsers();
                return res.status(200).json({
                    cases: cases.length,
                    assignedCases,
                    reviewedCases,
                    sentToBank,
                    topFiveCases,
                    productiveUsers,
                });
            }
            return res.status(200).json({
                cases: cases.length,
                assignedCases,
                reviewedCases,
                sentToBank,
                topFiveCases,
            });

        } catch (error: any) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
}

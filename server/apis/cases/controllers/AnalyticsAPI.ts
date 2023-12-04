import { Request, Response } from 'express';
import Cases, { CaseStatus } from 'model/Cases.model';
import dayjs from 'dayjs';
import CONFIG from 'config';

export default class AnalyticsAPI {
    private static instance = new this();
    private constructor() {}
    public static get api() {
        return this.instance;
    }

    private model = Cases;

    private getProductiveUsers = async (req: Request) => {
        try {
            let { startDate, endDate } = req.query;

            let matchQuery: { [key: string]: string | Date | object } = {
                status: CaseStatus.Completed,
            };

            if (startDate && endDate) {
                matchQuery.updatedAt = {
                    $gte: dayjs(String(startDate)).startOf('day').toDate(),
                    $lte: dayjs(String(endDate)).endOf('day').toDate(),
                };
            }

            const productiveUsers = await Cases.aggregate([
                {
                    $match: matchQuery,
                },
                {
                    $group: {
                        _id: '$assignTo',
                        completedCases: { $sum: 1 },
                    },
                },
                {
                    $sort: { completedCases: -1 },
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: '_id',
                        foreignField: '_id',
                        as: 'userDetails',
                    },
                },
                {
                    $unwind: '$userDetails',
                },
                {
                    $project: {
                        _id: 1,
                        completedCases: 1,
                        email: '$userDetails.email',
                        profile: '$userDetails.profile',
                        fullName: '$userDetails.fullName',
                    },
                },
            ]);

            return productiveUsers;
        } catch (error) {
            console.error('Error getting productive users: ', error);
            return [];
        }
    };

    public get = async (req: Request, res: Response): Promise<Response> => {
        try {
            let { startDate, endDate } = req.query;
            const currentUser = res.locals.user;
            if (!startDate) {
                startDate = dayjs().subtract(1, 'month').format('YYYY-MM-DD');
            }
            if (!endDate) {
                endDate = dayjs().format('YYYY-MM-DD');
            }
            let filter: { [key: string]: any } = {
                createdAt: {
                    $gte: dayjs(String(startDate)).startOf('day').toDate(),
                    $lte: dayjs(String(endDate)).endOf('day').toDate(),
                },
            };

            if (currentUser.role !== CONFIG.ADMIN_ROLE_ID) {
                filter = {
                    ...filter,
                    $or: [{ assignTo: currentUser.id }, { reviewer: currentUser.id }],
                };
            }

            const cases = await this.model.countDocuments(filter);
            const assignedCases = await this.model.countDocuments({
                ...filter,
                status: CaseStatus.Assigned,
            });
            const reviewedCases = await this.model.countDocuments({
                ...filter,
                status: CaseStatus.Reviewing,
            });
            const completedCases = await this.model.countDocuments({
                ...filter,
                status: CaseStatus.Completed,
            });
            const sentToBank = await this.model.countDocuments({
                ...filter,
                status: CaseStatus.SentToBank,
            });

            const topFiveCases = await this.model
                .find({
                    ...filter,
                    status: CaseStatus.Assigned,
                })
                .sort({ createdAt: -1 })
                .limit(5)
                .populate('reviewer')
                .populate('assignTo')
                .populate('branch')
                .populate('bankName');

            if (currentUser.role === CONFIG.ADMIN_ROLE_ID) {
                let productiveUsers = await this.getProductiveUsers(req);
                return res.status(200).json({
                    cases,
                    assignedCases,
                    reviewedCases,
                    completedCases,
                    sentToBank,
                    topFiveCases,
                    productiveUsers,
                });
            }
            return res.status(200).json({
                cases,
                assignedCases,
                reviewedCases,
                completedCases,
                sentToBank,
                topFiveCases,
            });
        } catch (error: any) {
            console.log(error);
            return res.status(500).json({
                message: error.message,
            });
        }
    };
}

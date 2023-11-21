import CONFIG from "config";
import Cases, {ICases} from "model/Cases.model";
import { SortOrder, Types } from "mongoose";


export default class CaseRepository {
    private static instance: CaseRepository = new this();
    private constructor() {}
    public static get repo(): CaseRepository {
        return this.instance;
    }

    protected model = Cases;

    public list = async (query: ListQuery, userId: string, role: string): Promise<ICases[]> => {
        try {
            const { limit, page, sort, order, filterBy, filterValue, q } = query;
            const limitNum = limit ? parseInt(limit.toString()) : 10;
            const pageNum = page ? parseInt(page.toString()) : 1;
            const skipNum = (pageNum - 1) * limitNum;
            let filterObj: { [key: string]: any; } = {};
            if (filterBy && filterValue) {
                filterObj[filterBy] = filterValue;
            }
            if (role !== CONFIG.ADMIN_ROLE_ID) {
                filterObj = {
                    ...filterObj,
                    $or: [
                        { assignTo: new Types.ObjectId(userId) },
                        { reviewer: new Types.ObjectId(userId) },
                    ],
                };
            }
            if (q) {
                const regex = new RegExp(q, "i");
                filterObj = {
                    ...filterObj,
                    $or: [
                        {name: regex},
                        {address: regex},
                        {mobile: regex},
                        {loanAmount: regex},
                        {referenceId: regex},
                        {localOrOGL: regex},
                        {city: regex},
                        {branch: regex},
                        {type: regex},
                        {bankName: regex},
                        {status: regex},
                        {receivedDate: regex},
                        {reviewer: regex},
                        {assignTo: regex},
                    ]
                };
            }
            const sortObj: { [key: string]: SortOrder; } = sort ? {[sort as string]: order === "ascend" ? 1 : -1} : {};
            const cases = await this.model.find(filterObj).sort(sortObj).limit(limitNum).skip(skipNum).populate("reviewer").populate("assignTo");
            return cases;
        } catch (error) {
            throw error;
        }
    }

    public count = async (query: ListQuery, userId: string, role: string): Promise<number> => {
        try {
            const { filterBy, filterValue, q } = query;
            let filterObj: { [key: string]: any; } = {};
            if (filterBy && filterValue) {
                filterObj[filterBy] = filterValue;
            }
            if (role !== CONFIG.ADMIN_ROLE_ID) {
                filterObj = {
                    ...filterObj,
                    $or: [
                        { assignTo: new Types.ObjectId(userId) },
                        { reviewer: new Types.ObjectId(userId) },
                    ],
                };
            }
            if (q) {
                const regex = new RegExp(q, "i");
                filterObj = {
                    ...filterObj,
                    $or: [
                        {name: regex},
                        {address: regex},
                        {mobile: regex},
                        {loanAmount: regex},
                        {referenceId: regex},
                        {localOrOGL: regex},
                        {city: regex},
                        {branch: regex},
                        {type: regex},
                        {bankName: regex},
                        {status: regex},
                        {receivedDate: regex},
                        {reviewer: regex},
                        {assignTo: regex},
                    ]
                };
            }
            const count = await this.model.countDocuments(filterObj);
            return count;
        } catch (error) {
            throw error;
        }
    }

    public create = async (data: ICases[]): Promise<ICases[]> => {
        try {
            const cases = await this.model.create(data);
            return cases;
        } catch (error) {
            throw error;
        }
    }

    public assignCase = async (id: string, assignTo: string, userType: string): Promise<ICases | null> => {
        let updateParams: { [key: string]: any; } = {};
        switch (userType) {
            case "reviewer":
                updateParams = {reviewer: new Types.ObjectId(assignTo)};
                break;
            case "user":
                updateParams = {assignTo: new Types.ObjectId(assignTo)};
                break;
            default:
                return null;
        }

        const updatedCase = await this.model.findOneAndUpdate({_id: new Types.ObjectId(id)}, {$set: updateParams}, {new: true});
        return updatedCase;
    }
}


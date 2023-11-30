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
            let filters = filterBy ? filterBy.split(",") : [];
            let values = filterValue ? filterValue.split(",") : [];
            if (filters.length !== values.length) {
                filters = [];
                values = [];
            }
            filters.forEach((filter, index) => {
                filterObj[filter] = values[index];
            });

            if (filterObj["status"]) {
                filterObj["status"] = {
                    $in: filterObj["status"].split("_")
                }
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
                let numericValue: number | null = parseFloat(q);
                if (isNaN(numericValue)) {
                    numericValue = null;
                }
                let dateValue: Date | null = new Date(q);
                if (isNaN(dateValue.getTime())) {
                    dateValue = null;
                }

                filterObj = {
                    ...filterObj,
                    $or: [
                        {name: regex},
                        {address: regex},
                        {referenceId: regex},
                        {localOrOGL: regex},
                        {city: regex},
                        {branch: regex},
                        {type: regex},
                        {bankName: regex},
                        {status: regex},
                        // Numeric fields
                        ...(numericValue !== null ? [{ mobile: numericValue }, { loanAmount: numericValue }] : []),
                        // Date fields
                        ...(dateValue !== null ? [{ receivedDate: { $eq: dateValue } }] : [])
                        // Add more conditions for other fields as needed
                    ]
                };
            }
            const sortObj: { [key: string]: SortOrder; } = sort ? {[sort as string]: order === "ascend" ? 1 : -1} : {};
            const userSelectedFields = "fullName email username profile role"
            const cases = await this.model.find(filterObj).sort(sortObj).limit(limitNum).skip(skipNum).populate("reviewer", userSelectedFields).populate("assignTo", userSelectedFields).populate("branch").populate("bankName");
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
            if (filterObj["status"]) {
                filterObj["status"] = {
                    $in: filterObj["status"].split("_")
                }
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
                let numericValue: number | null = parseFloat(q);
                if (isNaN(numericValue)) {
                    numericValue = null;
                }
                let dateValue: Date | null = new Date(q);
                if (isNaN(dateValue.getTime())) {
                    dateValue = null;
                }

                filterObj = {
                    ...filterObj,
                    $or: [
                        {name: regex},
                        {address: regex},
                        {referenceId: regex},
                        {localOrOGL: regex},
                        {city: regex},
                        {branch: regex},
                        {type: regex},
                        {bankName: regex},
                        {status: regex},
                        // Numeric fields
                        ...(numericValue !== null ? [{ mobile: numericValue }, { loanAmount: numericValue }] : []),
                        // Date fields
                        ...(dateValue !== null ? [{ receivedDate: { $eq: dateValue } }] : [])
                        // Add more conditions for other fields as needed
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
            case 'reviewer':
                updateParams = { reviewer: new Types.ObjectId(assignTo) };
                break;
            case 'user':
                updateParams = { assignTo: new Types.ObjectId(assignTo) };
                break;
            case 'status':
                updateParams = { status: assignTo };
                break;
            case 'remark':
                updateParams = { remark: assignTo };
                break;
            default:
                return null;
        }

        const updatedCase = await this.model.findOneAndUpdate({_id: new Types.ObjectId(id)}, {$set: updateParams}, {new: true}).populate("branch").populate("bankName");
        return updatedCase;
    }
}


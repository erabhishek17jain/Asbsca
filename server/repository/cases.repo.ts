import Cases, {ICases} from "model/Cases.model";
import { SortOrder } from "mongoose";


export default class CaseRepository {
    private static instance: CaseRepository = new this();
    private constructor() {}
    public static get repo(): CaseRepository {
        return this.instance;
    }

    protected model = Cases;

    public list = async (query: ListQuery): Promise<ICases[]> => {
        try {
            const { limit, skip, sort, order, filterBy, filterValue, q } = query;
            const limitNum = limit ? parseInt(limit.toString()) : 10;
            const skipNum = skip ? parseInt(skip.toString()) : 0;
            let filterObj: { [key: string]: any; } = {};
            if (filterBy && filterValue) {
                filterObj[filterBy] = filterValue;
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
            const cases = await this.model.find(filterObj).sort(sortObj).limit(limitNum).skip(skipNum);
            return cases;
        } catch (error) {
            throw error;
        }
    }

    public count = async (query: ListQuery): Promise<number> => {
        try {
            const { filterBy, filterValue, q } = query;
            let filterObj: { [key: string]: any; } = {};
            if (filterBy && filterValue) {
                filterObj[filterBy] = filterValue;
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
}


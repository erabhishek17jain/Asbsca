import Report, {IReport} from "model/Report.model";
import { Types } from "mongoose";


export default class ReportRepository implements Repository<IReport> {
    private static instance: ReportRepository = new this();
    private constructor() { }
    public static get repo(): ReportRepository {
        return this.instance;
    }
    protected model = Report;
    
    public get = async (_id: string): Promise<IReport | null> => {
        return await this.model.findOne({_id: new Types.ObjectId(_id)});
    }
    
    public list = async (query: ListQuery): Promise<IReport[]> => {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        return await this.model.find().skip(skip).limit(limit);
    }
    
    public count = async (query: ListQuery): Promise<number> => {
        return await this.model.countDocuments();
    }
    
    public create = async (report: IReport): Promise<IReport> => {
        return await this.model.create(report);
    }
    
    public update = async (data: IReport): Promise<IReport | null> => {
        const id = data._id;
        delete data._id;
        delete data.caseId;
        return await this.model.findOneAndUpdate({_id: new Types.ObjectId(id)}, {
        $set: data
        }, { new: true });
    }
    
    public delete = async (_id: string): Promise<IReport | null> => {
        return await this.model.findOneAndDelete({_id: new Types.ObjectId(_id)});
    }

    public getByCaseId = async (caseId: string): Promise<IReport | null> => {
        return await this.model.findOne({ caseId: new Types.ObjectId(caseId) });
    }
}

import Branch, { IBranch } from 'model/Branch.model';
import { Types } from 'mongoose';

export default class BranchRepository implements Repository<IBranch> {
  private static instance: BranchRepository = new this();
  private constructor() { }
  public static get repo(): BranchRepository {
    return this.instance;
  }
  protected model = Branch;

  public get = async (_id: string): Promise<IBranch | null> => {
    return await this.model.findOne({_id: new Types.ObjectId(_id)});
  }

  public list = async (): Promise<IBranch[]> => {
    return await this.model.find();
  }

  public create = async (branch: IBranch): Promise<IBranch> => {
    return await this.model.create(branch);
  }

  public update = async (data: IBranch): Promise<IBranch | null> => {
    const id = data._id;
    delete data._id;
    return await this.model.findOneAndUpdate({_id: new Types.ObjectId(id)}, {
      $set: data
    }, { new: true });
  }

  public delete = async (_id: string): Promise<IBranch | null> => {
    return await this.model.findOneAndDelete({_id: new Types.ObjectId(_id)});
  }

}



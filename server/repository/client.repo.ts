import Client, {IClient} from "model/Client.model";
import { Types } from 'mongoose';

export default class ClientRepository implements Repository<IClient> {
  private static instance: ClientRepository = new this();
  private constructor() { }
  public static get repo(): ClientRepository {
    return this.instance;
  }
  protected model = Client;

  public get = async (_id: string): Promise<IClient | null> => {
    return await this.model.findOne({_id: new Types.ObjectId(_id)}).populate("branch");
  }

  public list = async (): Promise<IClient[]> => {
    return await this.model.find().populate("branch");
  }

  public create = async (client: IClient): Promise<IClient> => {
    client.branch = new Types.ObjectId(client.branch);
    return await this.model.create(client);
  }

  public update = async (data: IClient): Promise<IClient | null> => {
    const id = data._id;
    delete data._id;
    data.branch = new Types.ObjectId(data.branch);
    return await this.model.findOneAndUpdate({_id: new Types.ObjectId(id)}, {
      $set: data
    }, { new: true }).populate("branch");
  }

  public delete = async (_id: string): Promise<IClient | null> => {
    return await this.model.findOneAndDelete({_id: new Types.ObjectId(_id)});
  }
}


import Client, {IClient} from "model/Client.model";
import { Types } from 'mongoose';
import cloudinary from "modules/cloudinary";

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

  public list = async (query: ListQuery): Promise<IClient[]> => {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    return await this.model.find().skip(skip).limit(limit).populate("branch");
  }

  public count = async (query: ListQuery): Promise<number> => {
    return await this.model.countDocuments();
  }

  public create = async (client: IClient): Promise<IClient> => {
    client.branch = new Types.ObjectId(client.branch);
    return await this.model.create(client);
  }

  public update = async (data: IClient): Promise<IClient | null> => {
    const id = data._id;
    delete data._id;
    if (data.logo && data.logo.startsWith("data:image")) {
      const logo = await cloudinary.uploader.upload(data.logo, { resource_type: "image" });
      data.logo = logo!.url;
    }
    if (data.signature && data.signature.startsWith("data:image")) {
      const sign = await cloudinary.uploader.upload(data.signature, { resource_type: "image" });
      data.signature = sign!.url;
    }
    data.branch = new Types.ObjectId(data.branch);
    return await this.model.findOneAndUpdate({_id: new Types.ObjectId(id)}, {
      $set: data
    }, { new: true }).populate("branch");
  }

  public delete = async (_id: string): Promise<IClient | null> => {
    return await this.model.findOneAndDelete({_id: new Types.ObjectId(_id)});
  }
}


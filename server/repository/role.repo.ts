import Roles, {IRoles} from "model/Roles.model";
import { Types } from "mongoose";


export default class RoleRepository implements Repository<IRoles> {
  private static instance: RoleRepository = new this();
  private constructor() {}
  public static get repo(): RoleRepository {
    return this.instance;
  }
  protected model = Roles;

  public async get(_id: string): Promise<IRoles | null> {
    return await this.model.findById(_id);
  }

  public async list(query: ListQuery): Promise<IRoles[]> {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    return await this.model.find().skip(skip).limit(limit);
  }

  public async count(query: ListQuery): Promise<number> {
    return await this.model.countDocuments();
  }

  public async create(role: IRoles): Promise<IRoles> {
    return await this.model.create(role);
  }

  public async update(role: IRoles): Promise<IRoles> {
    const id = role._id;
    delete role._id;
    const existingRole = await this.model.findByIdAndUpdate(new Types.ObjectId(id), {
      $set: role
    }, { new: true });
    if (!existingRole) throw new Error("Role not found");
    return existingRole;
  }

  public async delete(id: string): Promise<IRoles> {
    const existingRole = await this.model.findByIdAndDelete(id);
    if (!existingRole) throw new Error("Role not found");
    return existingRole;
  }
}


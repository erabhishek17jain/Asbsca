import Roles, {IRoles} from "model/Roles.model";


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

  public async list(): Promise<IRoles[]> {
    return await this.model.find();
  }

  public async create(role: IRoles): Promise<IRoles> {
    return await this.model.create(role);
  }

  public async update(role: IRoles): Promise<IRoles> {
    const existingRole = await this.model.findByIdAndUpdate(role._id, role);
    if (!existingRole) throw new Error("Role not found");
    return existingRole;
  }

  public async delete(id: string): Promise<IRoles> {
    const existingRole = await this.model.findByIdAndDelete(id);
    if (!existingRole) throw new Error("Role not found");
    return existingRole;
  }
}


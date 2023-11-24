import User, {IUser} from "model/User.model";
import Password from "modules/password";
import { Types } from "mongoose";


interface IUserRepository extends Repository<IUser> {
  authenticate: (email: string, password: string) => Promise<{ user: IUser, token: string }>;
}

export default class UserRepository implements IUserRepository {
  private static instance: UserRepository = new this();
  private constructor() {}
  public static get repo(): UserRepository {
    return this.instance;
  }
  protected model = User;

  public async get(_id: string): Promise<IUser | null> {
    return await this.model.findById(_id).populate("role");
  }

  public async getByEmail(email: string): Promise<IUser | null> {
    return await this.model.findOne({ email }).populate("role");
  }

  public async list(query: ListQuery): Promise<IUser[]> {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    return await this.model.find().skip(skip).limit(limit).populate("role");
  }

  public async count(query: ListQuery): Promise<number> {
    return await this.model.countDocuments();
  }

  public async create(user: IUser): Promise<IUser> {
    const existingUser = await this.model.findOne({ email: user.email });
    if (existingUser) throw new Error("User already exists");
    user.role = new Types.ObjectId(user.role);
    return await this.model.create(user);
  }

  public async update(user: IUser): Promise<IUser> {
    const id = user._id;
    delete user._id;
    delete user.password;
    delete user.isVerified;
    user.role = new Types.ObjectId(user.role);
    const existingUser = await this.model.findByIdAndUpdate(
      new Types.ObjectId(id),
      { $set: user },
      { new: true }
    );
    if (!existingUser) throw new Error("User not found");
    return existingUser;
  }

  public async delete(id: string): Promise<IUser> {
    const existingUser = await this.model.findByIdAndDelete(id);
    if (!existingUser) throw new Error("User not found");
    return existingUser;
  }

  public async authenticate(email: string, password: string): Promise<{ user: IUser, token: string }> {
    const user = await this.model.findOne({ email }).populate("role");
    if (!user) throw new Error("User not found");
    if (!user.isVerified) throw new Error("User not verified");
    if (!user.role) throw new Error("Role not found");
    const isMatch = Password.fn.validateHash(password, user.password!);
    if (!isMatch) throw new Error("Invalid password");
    const token = user.getToken();
    return { user, token };
  }
}



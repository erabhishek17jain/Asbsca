import User, {IUser} from "model/User.model";
import Password from "modules/password";


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

  public async list(): Promise<IUser[]> {
    return await this.model.find().populate("role");
  }

  public async create(user: IUser): Promise<IUser> {
    return await this.model.create(user);
  }

  public async update(user: IUser): Promise<IUser> {
    const existingUser = await this.model.findByIdAndUpdate(user._id, user);
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
    if (!user.role) throw new Error("Role not found");
    const isMatch = Password.fn.validateHash(password, user.password);
    if (!isMatch) throw new Error("Invalid password");
    const token = user.getToken();
    return { user, token };
  }
}



import mongoose from "mongoose";
import Roles from "./Roles.model";
import JWT from "modules/jwt";
import Password from "modules/password"

export interface IUser extends mongoose.Document {
    _id?: mongoose.Types.ObjectId;
    username: string;
    password?: string;
    email: string;
    fullName: string;
    role: mongoose.Types.ObjectId;
    about: string;
    mobile: number;
    address: string;
    isVerified?: boolean;
    profile: string;
    createdAt: Date;
    updatedAt: Date;
    getToken: () => string;
}
 
const UserSchema = new mongoose.Schema<IUser>({
    username: { 
      type: String, 
      required: true, 
      unique: true, 
    },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    role: { type: mongoose.Schema.Types.ObjectId, required: true, ref: Roles },
    mobile: { type: Number, required: true },
    address: { type: String, required: true },
    profile: { type: String, required: false },
    about: { type: String, required: false },
    email: { 
      type: String, 
      required: true,
      unique: true,
    },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true });

UserSchema.methods.getToken = function (): string {
  const payload = {
    id: this._id,
    email: this.email,
    role: this.role,
  };
  return JWT.fn.getToken(payload).accessToken;
};

UserSchema.pre<IUser>('save', function (next) {
  if (this.isModified('password')) {
    this.password = Password.fn.generateHash(this.password || "Secret@123");
  }
  next();
});

const User = mongoose.model<IUser>('user', UserSchema);
export default User;

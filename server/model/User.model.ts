import mongoose from "mongoose";
import Roles from "./Roles.model";
import JWT from "modules/jwt";
import Password from "modules/password"
import cloudinary from "modules/cloudinary";

enum Status {
  Active = "active",
  Inactive = "inactive"
}

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
    status: Status;
    profile: string;
    firebaseTokens?: string[];
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
    status: { type: String, default: Status.Active },
    firebaseTokens: [{ type: String }],
    isVerified: { type: Boolean, default: false },
}, { timestamps: true });

UserSchema.methods.getToken = function (): string {
  const payload = {
    id: this._id,
    email: this.email,
    role: this.role._id,
  };
  return JWT.fn.getToken(payload).accessToken;
};

UserSchema.pre<IUser>('save', function (next) {
  if (this.isModified('password')) {
    this.password = Password.fn.generateHash(this.password || "Secret@123");
  }
  if (this.profile && this.isModified('profile')) {
    cloudinary.uploader.upload(this.profile, { resource_type: "image" }, (err, res) => {
      if (err) {
        console.log(err);
      }
      this.profile = res!.url;
    });
  }
  next();
});

const User = mongoose.model<IUser>('user', UserSchema);
export default User;

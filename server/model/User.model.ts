import mongoose from "mongoose";
import Roles from "./Roles.model";

export interface IUser extends mongoose.Document {
    _id: string;
    username: string;
    password: string;
    email: string;
    fullName: string;
    role: mongoose.Types.ObjectId;
    mobile: number;
    address: string;
    profile: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    role: { type: mongoose.Schema.Types.ObjectId, required: true, ref: Roles },
    mobile: { type: Number, required: true },
    address: { type: String, required: true },
    profile: { type: String, required: true },
    email: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model<IUser>('user', UserSchema);
export default User;

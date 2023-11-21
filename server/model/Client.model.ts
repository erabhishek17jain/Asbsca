import mongoose from "mongoose";
import Branch from "./Branch.model";

enum Status {
    Active = "active",
    Inactive = "inactive"
}

export interface IClient extends mongoose.Document {
    name: string;
    branch: mongoose.Types.ObjectId;
    status: Status;
    logo?: string;
    signature?: string;
    createdAt: Date;
    updatedAt: Date;
}

const ClientSchema = new mongoose.Schema<IClient>({
    name: { type: String, required: true },
    branch: { type: mongoose.Schema.Types.ObjectId, ref: Branch, required: true },
    status: { type: String, default: Status.Active },
    logo: { type: String, required: false },
    signature: { type: String, required: false },
}, { timestamps: true });

const Client = mongoose.model<IClient>('client', ClientSchema);
export default Client;


import mongoose from "mongoose";
import Branch from "./Branch.model";

export interface IClient extends mongoose.Document {
    name: string;
    branch: mongoose.Types.ObjectId;
    logo?: string;
    signature?: string;
    status: Status;
    createdAt: Date;
    updatedAt: Date;
}

const ClientSchema = new mongoose.Schema<IClient>({
    name: { type: String, required: true },
    branch: { type: mongoose.Schema.Types.ObjectId, ref: Branch, required: true },
}, { timestamps: true });

const Client = mongoose.model<IClient>('client', ClientSchema);
export default Client;


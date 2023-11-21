import mongoose from "mongoose";

enum Status {
    Active = "active",
    Inactive = "inactive"
}

export interface IBranch extends mongoose.Document {
    _id?: string;
    name: string;
    address: string;
    status: Status;
    createdAt: Date;
    updatedAt: Date;
}

const BranchsSchema = new mongoose.Schema<IBranch>({
    name: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, default: Status.Active },
}, { timestamps: true });

const Branch = mongoose.model<IBranch>("branch", BranchsSchema);
export default Branch;

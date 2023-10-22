import mongoose from "mongoose";

interface IBranch extends mongoose.Document {
    _id?: string;
    name: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
}

const BranchsSchema = new mongoose.Schema<IBranch>({
    name: { type: String, required: true },
    address: { type: String, required: true },
}, { timestamps: true });

const Branch = mongoose.model<IBranch>("branch", BranchsSchema);
export default Branch;

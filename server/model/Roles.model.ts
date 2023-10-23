import mongoose from "mongoose";

export interface IRoles extends mongoose.Document {
    _id?: string;
    name: string;
    permissions: string[];
    createdAt: Date;
    updatedAt: Date;
}

const RolesSchema = new mongoose.Schema<IRoles>({
    name: { type: String, required: true },
    permissions: [{ type: String, required: true }],
}, { timestamps: true });

const Roles = mongoose.model<IRoles>("Roles", RolesSchema);
export default Roles;

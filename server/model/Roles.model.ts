import mongoose from "mongoose";

enum Status {
    Active = "active",
    Inactive = "inactive"
}

export interface IRoles extends mongoose.Document {
    _id?: string;
    name: string;
    permissions: string[];
    status: Status;
    createdAt: Date;
    updatedAt: Date;
}

const RolesSchema = new mongoose.Schema<IRoles>({
    name: { type: String, required: true },
    permissions: [{ type: String, required: true }],
    status: { type: String, default: Status.Active },
}, { timestamps: true });

const Roles = mongoose.model<IRoles>("Roles", RolesSchema);
export default Roles;

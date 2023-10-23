import mongoose from "mongoose";

export interface IFiles extends mongoose.Document {
    _id: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}

const FilesSchema = new mongoose.Schema<IFiles>({
    url: { type: String, required: true },
}, { timestamps: true });

const Files = mongoose.model<IFiles>('files', FilesSchema);
export default Files;

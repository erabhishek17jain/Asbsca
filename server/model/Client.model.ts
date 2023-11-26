import mongoose from "mongoose";
import Branch from "./Branch.model";
import cloudinary from "modules/cloudinary";

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

ClientSchema.pre('save', function (next) {
    if (this.logo && this.isModified('logo')) {
        cloudinary.uploader.upload(this.logo, { resource_type: "image" }, (err, res) => {
            if (err) {
                console.log(err);
            }
            this.logo = res!.url;
        });
    }

    if (this.signature && this.isModified('signature')) {
        cloudinary.uploader.upload(this.signature, { resource_type: "image" }, (err, res) => {
            if (err) {
                console.log(err);
            }
            this.signature = res!.url;
        });
    }

    next();
});

const Client = mongoose.model<IClient>('client', ClientSchema);
export default Client;


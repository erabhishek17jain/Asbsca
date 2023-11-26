import mongoose from "mongoose";
import User from "./User.model";

export interface INotification extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    description: string;
    user: mongoose.Types.ObjectId;
    updateAt: Date;
    createAt: Date;
}

const NotificationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    body: {
        type: String,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: User,
        required: true,
    }
}, { timestamps: true });

const Notification = mongoose.model<INotification>("Notification", NotificationSchema);
export default Notification;

import mongoose from "mongoose";
import User from "./User.model";

enum CaseStatus {
    Pending = "Pending",
    Approved = "Approved",
    Rejected = "Rejected"
}

export interface ICases extends mongoose.Document {
    name: string;
    address: string;
    mobile: number;
    loanAmount: number;
    referenceId: string;
    localOrOGL: "Local" | "OGL";
    city: string;
    branch: string;
    type: "PD" | "LIP";
    bankName: string;
    status: CaseStatus;
    receivedDate: Date;
    visitStatus: VisitStatus;
    reportStatus: ReportStatus;
    reviewer: mongoose.Types.ObjectId;
    isReviewed: boolean;
    isSentToBank: boolean;
    assignTo: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const CasesSchema = new mongoose.Schema<ICases>({
    name: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: Number, required: true },
    loanAmount: { type: Number, required: true },
    referenceId: { type: String, required: true },
    localOrOGL: { type: String, required: true },
    city: { type: String, required: true },
    branch: { type: String, required: true },
    type: { type: String, required: true },
    bankName: { type: String, required: true },
    status: { type: String, default: CaseStatus.Pending },
    receivedDate: { type: Date, default: Date.now },
    reviewer: { type: mongoose.Schema.Types.ObjectId, ref: User, required: false },
    isReviewed: { type: Boolean, default: false },
    isSentToBank: { type: Boolean, default: false },
    assignTo: { type: mongoose.Schema.Types.ObjectId, ref: User, required: false },
}, { timestamps: true });

const Cases = mongoose.model<ICases>('cases', CasesSchema);
export default Cases;

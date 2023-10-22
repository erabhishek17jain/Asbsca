import mongoose from "mongoose";
import User from "./User.model";


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
    status: { type: String, required: true },
    receivedDate: { type: Date, required: true },
    reviewer: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
    assignTo: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
}, { timestamps: true });

const Cases = mongoose.model<ICases>('cases', CasesSchema);
export default Cases;

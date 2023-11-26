import mongoose from "mongoose";
import { Schema } from "mongoose";
import Cases from "./Cases.model";

export interface IReport extends mongoose.Document {
    _id?: mongoose.Types.ObjectId;
    caseId?: mongoose.Types.ObjectId;
    data: any;
    createdAt?: Date;
    updatedAt?: Date;
}

const ReportSchema = new mongoose.Schema<IReport>({
    caseId: { type: mongoose.Schema.Types.ObjectId, ref: Cases, required: true },
    data: { type: Schema.Types.Mixed, required: true },
}, { timestamps: true });

const Report = mongoose.model<IReport>('report', ReportSchema);
export default Report;
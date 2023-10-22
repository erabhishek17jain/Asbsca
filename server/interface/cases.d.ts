
declare enum CaseStatus {
    Pending = "Pending",
    Approved = "Approved",
    Rejected = "Rejected"
}

declare type VisitStatus = {
    startTime: Date;
    endTime: Date;
}

declare type ReportStatus = {
    startTime: Date;
    endTime: Date;
}

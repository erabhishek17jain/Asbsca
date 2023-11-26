
declare enum CaseStatus {
    Unassigned = "unassigned",
    Assigned = "assigned",
    Reviewing = "review",
    Query = "query",
    Completed = "completed",
    SentToBank = "sentToBank",
}

declare type VisitStatus = {
    startTime: Date;
    endTime: Date;
}

declare type ReportStatus = {
    startTime: Date;
    endTime: Date;
}

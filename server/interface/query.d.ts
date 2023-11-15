
declare interface ListQuery {
    limit?: number;
    skip?: number;
    sort?: string;
    order?: string;
    filterBy?: string;
    filterValue?: string;
    q?: string;
}
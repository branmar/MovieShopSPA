export interface PagedResultSet {
    pageNumber:number;
    totalRecord:number;
    pageSize:number;
    totalPages:number;
    hasPreviousPages:number;
    hasNextPage:number;
    pagedData?:object[];
}

import { HttpHeaders } from "@angular/common/http";
import { ErrorModel } from './error.model';

export interface PaginateModel<T> {
    data?: {
        docs: T;
        totalDocs: number;
        limit: number;
        totalPages: number;
        page: number;
        pagingCounter: number;
        hasPrevPage: boolean,
        hasNextPage: boolean,
        prevPage: number;
        nextPage: number;
    };
    statusCode?: number;
    /** Error response */
    error?: ErrorModel;
    headers?: HttpHeaders;
    message?: string;
    name?: string;
    ok?: boolean;
    status?: number;
    statusText?: string;
    url?: string;
}

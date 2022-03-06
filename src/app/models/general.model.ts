import { HttpHeaders } from "@angular/common/http";
import { ErrorModel } from './error.model';

export interface GeneralModel<T> {
    data?: T;
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

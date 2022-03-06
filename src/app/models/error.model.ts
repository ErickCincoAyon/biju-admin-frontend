export interface ErrorModel {
    error?: {
        statusCode: number,
        message: string,
    };
    path?: string;
    time?: string;
}
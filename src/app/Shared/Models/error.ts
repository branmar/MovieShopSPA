export interface Error {
    message:string;
    stackTrace:string;
    exceptionDateTime:Date;
    exceptionType:string;
    path:string;
    httpRequestType:string;
    user:string;
}

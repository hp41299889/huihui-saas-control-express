export type ApiResultErrorCode = 0 | 1001 | 2001 | 3001; // server unknown error

export interface ApiError<T> {
  errorCode: ApiResultErrorCode;
  data?: T;
}

export interface ApiResponse<T> extends ApiError<T> {
  httpCode: number;
}

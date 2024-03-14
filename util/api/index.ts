import { Response } from "express";

import type { ApiResponse, ApiError } from "./interface";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";

export const apiResponse = (r: ApiResponse<unknown>) => {
  return r;
};

// generate a error object
export const apiError = (e: ApiError<unknown>) => {
  return e;
};

export const resHandler = <T>(res: Response, apiResponse: ApiResponse<T>) => {
  const { httpCode, errorCode, data } = apiResponse;
  return res.status(httpCode).json({
    errorCode,
    data,
  });
};

export const errorHandler = (res: Response, error: ApiError<any>) => {
  const { errorCode, data } = error;
  let httpCode: number;
  let msg: string;

  switch (errorCode) {
    case 1001: {
      httpCode = 500;
      msg = data ?? "unknown server error";
      break;
    }
    case 2001: {
      httpCode = 401;
      msg = data ?? "auth failed";
      break;
    }
    default: {
      httpCode = 500;
      msg = data ?? "unknown server error";
    }
  }
  res.status(httpCode).json({
    errorCode,
    msg,
  });
};

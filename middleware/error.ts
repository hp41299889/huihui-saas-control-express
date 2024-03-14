import { Request, Response, NextFunction } from "express";

import { errorHandler } from "@/util/api";
import type { ApiError } from "@/util/api/interface";

export const apiErrorHandler = (
  err: ApiError<any>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  errorHandler(res, err);
  next();
};

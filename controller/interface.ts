import { Request, Response, NextFunction } from "express";

import { ApiResponse } from "@/util/api/interface";

export type Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<Response<any, Record<string, any>> | undefined>;

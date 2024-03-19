import { NextFunction, Request, Response } from "express";

import { apiResponse, resHandler } from "@/util/api";
import { createServiceApi } from "@/api";
import type { ServiceController } from "./interface";
import type { Controller } from "../interface";
import type { PostInput } from "@/api/service/interface";

const serviceApi = createServiceApi();

const post: Controller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;
    const p: PostInput = body;
    const r = await serviceApi.post(p);
    return resHandler(
      res,
      apiResponse({ httpCode: 201, errorCode: 0, data: r })
    );
  } catch (error) {
    next(error);
  }
};

const get: Controller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const r = await serviceApi.get();
    return resHandler(
      res,
      apiResponse({ httpCode: 200, errorCode: 0, data: r })
    );
  } catch (error) {
    next(error);
  }
};

export const createServiceController = (): ServiceController => {
  const serviceController: ServiceController = {
    post,
    get,
  };

  return serviceController;
};

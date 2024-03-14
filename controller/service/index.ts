import { NextFunction, Request, Response } from "express";

import { apiResponse, resHandler } from "@/util/api";
import { createServiceApi } from "@/api";
import type { ServiceController } from "./interface";
import type { Controller } from "../interface";
import type { ServiceCreateInput } from "@/repository/service/interface";

const serviceApi = createServiceApi();

const postService: Controller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;
    const s: ServiceCreateInput = body;
    const r = await serviceApi.postService(s);
    return resHandler(
      res,
      apiResponse({ httpCode: 201, errorCode: 0, data: r })
    );
  } catch (error) {
    next(error);
  }
};

const getService: Controller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const r = await serviceApi.getService();
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
    postService,
    getService,
  };

  return serviceController;
};

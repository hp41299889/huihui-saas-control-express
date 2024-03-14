import { NextFunction, Request, Response } from "express";

import { apiResponse, resHandler } from "@/util/api";
import { createAuthApi } from "@/api";
import type { AuthController } from "./interface";
import type { Controller } from "../interface";

const authApi = createAuthApi();

const postAuth: Controller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  try {
    const r = await authApi.postSignin(body);
    return resHandler(
      res,
      apiResponse({ httpCode: 200, errorCode: 0, data: r })
    );
  } catch (error) {
    next(error);
  }
};

export const createAuthController = (): AuthController => {
  const authController: AuthController = {
    postAuth,
  };

  return authController;
};

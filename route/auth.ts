import { Router } from "express";

import { createAuthController } from "@/controller";

const authController = createAuthController();

export const authRouter = Router();

authRouter.route("/auth").post(authController.postAuth);

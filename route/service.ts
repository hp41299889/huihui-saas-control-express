import { Router } from "express";

import { createServiceController } from "@/controller";

const serviceController = createServiceController();

export const serviceRouter = Router();

serviceRouter
  .route("/service")
  .post(serviceController.post)
  .get(serviceController.get);

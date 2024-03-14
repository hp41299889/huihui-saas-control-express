import { Router } from "express";

import { serviceRouter } from "./service";
import { authRouter } from "./auth";

export const router: Router[] = [serviceRouter, authRouter];

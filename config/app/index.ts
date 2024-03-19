import { env } from "../env";
import type { AppConfig, AppDeployment } from "./interface";

const { APP_DEPLOYMENT, APP_PORT } = env;

export const appConfig: AppConfig = {
  deployment: (APP_DEPLOYMENT as AppDeployment) || "development",
  port: APP_PORT || "5000",
};

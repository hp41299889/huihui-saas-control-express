import { env } from "../env";
import { AppConfig } from "./interface";

const { APP_PORT } = env;

export const appConfig: AppConfig = {
  port: APP_PORT || "5000",
};

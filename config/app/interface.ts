export type AppDeployment = "development" | "production";

export interface AppConfig {
  deployment: AppDeployment;
  port: string;
}

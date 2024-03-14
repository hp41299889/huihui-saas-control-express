import express, { Express, Router } from "express";

import { appConfig } from "./config";
import { router } from "./route";
import { prisma } from "./service";
import { middlewares } from "./middleware";

const port = appConfig.port;

export const app = express();

app.use(express.json());

const routerHook = (app: Express, routers: Router[]) => {
  console.log("registering router...");
  routers.forEach((route) => {
    console.log("app registering route", `[${route.stack[0].route.path}]`);
    app.use(route);
  });
};

const middlewareHook = (app: Express, middlewares: any[]) => {
  console.log("registering middleware...");
  middlewares.forEach((middleware) => {
    console.log("app registering middleware", `[${middleware.name}]`);
    app.use(middleware);
  });
};

const serviceHook = async () => {
  console.log("registering service...");
  try {
    console.log("registering prisma client...");
    await prisma.$connect();
  } catch (error) {
    console.error("registering service got error");
    console.error(error);
  }
};

export const appCallback = async () => {
  console.log("starting app...");
  routerHook(app, router);
  middlewareHook(app, middlewares);
  await serviceHook();
  console.log("server is running on port", port);
};

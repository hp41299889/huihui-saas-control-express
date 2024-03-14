import { app, appCallback } from "./app";
import { appConfig } from "./config";

const port = appConfig.port;
app.listen(port, appCallback);

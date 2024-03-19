import { join } from "path";
import moduleAlias from "module-alias";

import { appConfig } from "../../config";

const root =
  appConfig.deployment === "production"
    ? join(process.cwd(), "dist")
    : process.cwd();

moduleAlias.addAliases({
  "@/": root,
  "@/api": root + "/api",
  "@/config": root + "/config",
  "@/controller": root + "/controller",
  "@/middleware": root + "/middleware",
  "@/repository": root + "/repository",
  "@/route": root + "/route",
  "@/service": root + "/service",
  "@/util": root + "/util",
});

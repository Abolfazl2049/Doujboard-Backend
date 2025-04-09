import generateSwagger from "swagger-autogen";
import {appConfig} from "#src/config.js";

const swaggerDocument = {
  info: {
    version: "1.0.0",
    title: "Godfather Forms"
  },
  host: appConfig.PORT,
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  securityDefinitions: {}
};
const swaggerFile = "../../swagger_output.json";
const apiRouteFile = ["../router.ts"];
generateSwagger(swaggerFile, apiRouteFile, swaggerDocument);

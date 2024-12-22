const express = require("express");
const app = express();
import * as bodyParser from "body-parser";
import { setupAddRoute } from "./api/addRoute";
import { setupDefaultRoute } from "./api/defaultRoute";
import { setupDynamicRoutes } from "./api/dynamicRoutes";

app.use(bodyParser.json());

app.use(express.json());

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

setupDynamicRoutes(app);
setupAddRoute(app);
setupDefaultRoute(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

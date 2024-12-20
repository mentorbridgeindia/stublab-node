const express = require("express");
const app = express();
import bodyParser from "body-parser";
import { setupAddRoute } from "./app/addRoute";
import { setupDynamicRoutes } from "./app/dynamicRoutes";
import { routesConfig } from "./app/routes";

app.use(bodyParser.json());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

setupDynamicRoutes(app, routesConfig);
setupAddRoute(app);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

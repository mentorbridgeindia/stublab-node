const express = require("express");
const app = express();
import bodyParser from "body-parser";
import { setupAddRoute } from "./app/addRoute";
import { setupDynamicRoutes } from "./app/dynamicRoutes";

app.use(bodyParser.json());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

setupDynamicRoutes(app);
setupAddRoute(app);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

import { Express, Request, Response } from "express";
import { setupDynamicRoutes } from "./dynamicRoutes";
import { Route } from "./route.types";
import { routesConfig } from "./routes";

export const setupAddRoute = (app: Express) => {
  app.post("/add-route", (req: Request, res: Response) => {
    const newRoute = req.body as Route;

    // TODO: Validate the new route
    // TODO: Add the new route to the routesConfig in Mongo DB
    routesConfig.push(newRoute);

    setupDynamicRoutes(app, [newRoute]);

    res.send({ message: "Route added successfully!" });
  });
};

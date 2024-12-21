import { Express, Request, Response  } from "express";

export const setupDefaultRoute = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
  });
};

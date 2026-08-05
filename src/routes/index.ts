// combine all ur routes of application
// 1000
// pluging all routes in one place
import { Router } from "express";
import { healthRouter } from "./health.routes";


export const apiRouter = Router();

apiRouter.use(healthRouter);


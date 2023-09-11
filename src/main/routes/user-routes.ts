import { Router, Request, Response } from "express";

import { createUserFactory } from "../factories/create-user-factory";

// Import controllers
const userRoutes: Router = Router();

userRoutes.get("/ping", (req: Request, res: Response) => {
    res.send("Pong");
});

userRoutes.post("/add", (req: Request, res: Response) => {
    createUserFactory().createUser(req, res);
});

export default userRoutes;

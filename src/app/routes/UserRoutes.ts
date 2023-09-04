import { Router } from "express";
import { Request, Response } from "express";

import { UserController } from "./../../presentation/controllers/UserController";
import { ExpressAdapter } from "./../adapters/ExpressAdapter";

// Import controllers
const UserRouters: Router = Router();

UserRouters.get("/ping", (req, res) => {
    res.send("Pong");
});

UserRouters.post("/add", (req: Request, res: Response) => {
    const adapter = new ExpressAdapter(req, res);
    const UserModel = new UserController(adapter);
    UserModel.createUser();
});

export default UserRouters;

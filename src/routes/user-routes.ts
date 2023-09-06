import { Router } from "express";
import { Request, Response } from "express";

import { UserController } from "../../presentation/controllers/user-controller";
import { ExpressAdapter } from "../../adapters/ExpressAdapter";

// Import controllers
const userRoutes: Router = Router();

userRoutes.get("/ping", (req, res) => {
    res.send("Pong");
});

userRoutes.post("/add", (req: Request, res: Response) => {
    const adapter = new ExpressAdapter(req, res);
    const UserModel = new UserController(adapter);
    UserModel.createUser();
});

export default userRoutes;

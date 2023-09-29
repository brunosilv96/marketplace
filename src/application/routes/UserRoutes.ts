import { Router } from "express";
import { ExpressAdapter } from "../adapters/ExpressAdapter";
import insertUserFactory from "../factories/insertUserFactory";
import findUserFactory from "../factories/findUserFactory";

const userRouters = Router();

userRouters.post("/newUser", ExpressAdapter.acople(insertUserFactory));
userRouters.get("/all", ExpressAdapter.acople(findUserFactory));

export default userRouters;

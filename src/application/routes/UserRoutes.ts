import { Router } from "express";
import { ExpressAdapter } from "../adapters/ExpressAdapter";
import insertUserFactory from "../factories/createUserFactory";

const userRouters = Router();

userRouters.post("/newUser", ExpressAdapter.acople(insertUserFactory));

export default userRouters;

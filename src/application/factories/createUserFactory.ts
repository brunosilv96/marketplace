import { InsertUserCase } from "../../domain/useCases/insertUserUseCase";
import { InsertUserDB } from "../../infrastructure/repositories/user/InsertUserDB";
import { InsertUserController } from "../controllers/insertUserController";

const insertUserCase = new InsertUserCase();
const insertUserDB = new InsertUserDB();
const insertUserFactory = new InsertUserController(insertUserCase, insertUserDB);

export default insertUserFactory;

import { InsertUserCase } from "../../domain/useCases/insertUserUseCase";
import { InsertUserController } from "../controllers/insertUserController";

const insertUserCase = new InsertUserCase();
const insertUserFactory = new InsertUserController(insertUserCase);

export default insertUserFactory;

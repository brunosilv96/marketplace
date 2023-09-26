import { InsertUserCase } from "../../domain/useCases/insertUserUseCase";
import { UserRepository } from "../../infrastructure/repositories/UserRepositoryMongo";
import { InsertUserController } from "../controllers/insertUserController";

const insertUserCase = new InsertUserCase();
const userRepository = new UserRepository();
const insertUserFactory = new InsertUserController(insertUserCase, userRepository);

export default insertUserFactory;

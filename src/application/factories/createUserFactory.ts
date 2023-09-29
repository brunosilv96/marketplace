import { InsertUserCase } from "../../domain/useCases/insertUserUseCase";
import { UserRepository } from "../../infrastructure/repositories/UserRepositoryMongo";
import { InsertUserController } from "../controllers/insertUserController";

const userRepository = new UserRepository();
const insertUserCase = new InsertUserCase(userRepository);
const insertUserFactory = new InsertUserController(insertUserCase);

export default insertUserFactory;

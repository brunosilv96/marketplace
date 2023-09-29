import { FindUserUseCase } from "../../domain/useCases/findUserUseCase";
import { UserRepository } from "../../infrastructure/repositories/UserRepositoryMongo";
import { FindUserController } from "../controllers/findUserController";

const userRepository = new UserRepository();
const findUserUseCase = new FindUserUseCase(userRepository);
const findUserFactory = new FindUserController(findUserUseCase);

export default findUserFactory;

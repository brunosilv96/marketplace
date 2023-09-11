import { CreateUserUseCase } from "../../domain/use-cases/create-user";
import { CreateUserController } from "../../presentation/controllers/user-controller";

export const createUserFactory = (): CreateUserController => {
    const userController = new CreateUserController(new CreateUserUseCase());
    return userController;
};

import { IInsertUserUseCase } from "../../domain/contracts/IInsertUserUseCase";
import { ICreateUserRepository } from "../../infrastructure/contracts/user/IUserRepository";
import { HttpRequest, HttpResponse, IController } from "../contracts/IController";

export class InsertUserController implements IController {
    userUseCase: IInsertUserUseCase;
    userRepository: ICreateUserRepository;

    constructor(insertUserCase: IInsertUserUseCase, userRepository: ICreateUserRepository) {
        this.userUseCase = insertUserCase;
        this.userRepository = userRepository;
    }

    async run({ body }: HttpRequest): Promise<HttpResponse> {
        try {
            const { id, name, job, age } = body;

            const newUser = await this.userUseCase.exec({ id, name, job, age });

            await this.userRepository.execute(newUser);

            return {
                code: 201,
                data: newUser,
            };
        } catch (error: any) {
            return {
                code: 500,
                data: error.message,
            };
        }
    }
}

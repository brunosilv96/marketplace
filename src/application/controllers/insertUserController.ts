import { IInsertUserUseCase } from "../../domain/contracts/IInsertUserUseCase";
import { IUserRepository } from "../../infrastructure/contracts/user/IUserRepository";
import { HttpRequest, HttpResponse, IController } from "../contracts/IController";

export class InsertUserController implements IController {
    userUseCase: IInsertUserUseCase;
    userRepository: IUserRepository;

    constructor(insertUserCase: IInsertUserUseCase, insertUserRepository: IUserRepository) {
        this.userUseCase = insertUserCase;
        this.userRepository = insertUserRepository;
    }

    async run({ body }: HttpRequest): Promise<HttpResponse> {
        try {
            const { name, email, password, phone } = body;

            const newUser = this.userUseCase.exec({ name, email, password, phone });

            const newUserDb = await this.userRepository.insert(newUser);

            return {
                code: 201,
                data: newUserDb,
            };
        } catch (error: any) {
            return {
                code: 500,
                data: error.message,
            };
        }
    }
}

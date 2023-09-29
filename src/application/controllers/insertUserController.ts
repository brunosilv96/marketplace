import { IInsertUserUseCase } from "../../domain/contracts/IInsertUserUseCase";
import { IUserRepository } from "../../infrastructure/contracts/user/IUserRepository";
import { HttpRequest, HttpResponse, IController } from "../contracts/IController";

export class InsertUserController implements IController {
    userUseCase: IInsertUserUseCase;

    constructor(insertUserCase: IInsertUserUseCase) {
        this.userUseCase = insertUserCase;
    }

    async run({ body }: HttpRequest): Promise<HttpResponse> {
        try {
            const { name, email, password, phone } = body;

            const newUser = await this.userUseCase.exec({ name, email, password, phone });

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

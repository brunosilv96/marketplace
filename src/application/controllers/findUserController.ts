import { IFindUserUseCase } from "../../domain/contracts/IFindUserUseCase";
import { HttpRequest, HttpResponse, IController } from "../contracts/IController";

export class FindUserController implements IController {
    userUseCase: IFindUserUseCase;

    constructor(insertUserCase: IFindUserUseCase) {
        this.userUseCase = insertUserCase;
    }

    async run(): Promise<HttpResponse> {
        try {
            const users = await this.userUseCase.findAllUser();

            return {
                code: 200,
                data: users,
            };
        } catch (error: any) {
            return {
                code: 500,
                data: error.message,
            };
        }
    }
}

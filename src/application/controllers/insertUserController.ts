import { InsertUserCase } from "../../domain/useCases/insertUserUseCase";
import { HttpRequest, HttpResponse, IController } from "../contracts/IController";

export class InsertUserController implements IController {
    userCase: InsertUserCase;

    constructor(insertUserCase: InsertUserCase) {
        this.userCase = insertUserCase;
    }

    async run({ body }: HttpRequest): Promise<HttpResponse> {
        try {
            const { id, name, job, age } = body;

            const newUser = await this.userCase.exec({ id, name, job, age });

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

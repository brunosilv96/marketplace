import { CreateUserUseCase } from "../../domain/use-cases/create-user";
import { Request, Response } from "express";
export class CreateUserController {
    private createUserUseCase;

    constructor(createUserUseCase: CreateUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    async createUser(req: Request, res: Response) {
        try {
            const { id, name, age } = req.body;
            const newUser = await this.createUserUseCase.run({ id, name, age });
            return res.status(200).json(newUser);
        } catch (e: any) {
            return res.status(422).json(e.message);
        }
    }
}

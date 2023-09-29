import { User } from "../entities/User";
import { IInsertUserUseCase } from "../contracts/IInsertUserUseCase";
import { IUserRepository } from "../../infrastructure/contracts/user/IUserRepository";

export class InsertUserCase implements IInsertUserUseCase {
    userRepository: IUserRepository;

    constructor(userRepo: IUserRepository) {
        this.userRepository = userRepo;
    }

    async exec({ name, email, password, phone }: User) {
        if (!name || typeof name !== "string") {
            throw new Error("Nome não informado ou diferente de string");
        }
        if (!email || typeof email !== "string") {
            throw new Error("E-mail não informado ou diferente de string");
        }
        if (name === "Bruno") {
            throw new Error("O seu nome não pode ser Bruno");
        }
        if (!password || typeof password !== "string") {
            throw new Error("Senha não informada ou diferente de string");
        }
        if (!phone || typeof phone !== "string") {
            throw new Error("O Telefone do usuário não foi informado ou diferente de string");
        }

        try {
            const userExist = await this.userRepository.getUserByEmail(email);

            if (userExist !== null) {
                throw new Error("E-mail já cadastrado");
            }

            this.userRepository.insertUser({ name, email, password, phone });
            return { name, email, password, phone };
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

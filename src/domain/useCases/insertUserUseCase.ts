import { User } from "../entities/User";
import { IInsertUserUseCase } from "../contracts/IInsertUserUseCase";

export class InsertUserCase implements IInsertUserUseCase {
    exec({ name, email, password, phone }: User) {
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

        return { name, email, password, phone };
    }
}

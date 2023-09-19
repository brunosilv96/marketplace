import { User } from "../entities/User";
import { IInsertUserUseCase } from "../contracts/IInsertUserUseCase";

export class InsertUserCase implements IInsertUserUseCase {
    exec({ id, name, job, age }: User) {
        if (!id || typeof id !== "string") {
            throw new Error("ID não informado ou diferente de string");
        }
        if (!name || typeof name !== "string") {
            throw new Error("Nome não informado ou diferente de string");
        }
        if (name === "Bruno") {
            throw new Error("O seu nome não pode ser Bruno");
        }
        if (!job || typeof job !== "string") {
            throw new Error("JOB não informado ou diferente de string");
        }
        if (!age || typeof age !== "number") {
            throw new Error("O job do usuário não foi informado");
        }

        return { id, name, job, age };
    }
}

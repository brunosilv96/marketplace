import { User } from "../entities/User";

export class InsertUserCase {
    exec({ id, name, job, age }: User) {
        if (id === "") {
            throw new Error("O ID do usuário não foi informado");
        }
        if (name === "") {
            throw new Error("O name do usuário não foi informado");
        }
        if (name === "Bruno") {
            throw new Error("O seu nome não pode ser Bruno");
        }
        if (job === "") {
            throw new Error("O job do usuário não foi informado");
        }
        if (!age || typeof age !== "number") {
            throw new Error("O job do usuário não foi informado");
        }

        return { id, name, job, age };
    }
}

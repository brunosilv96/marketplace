import { User } from "../entities/user";

interface ICreateUserRequest {
    id: string;
    name: string;
    age: number;
    msg?: string;
}

type CreateUserResponse = User;

export class CreateUser {
    run({ name, age }: Omit<ICreateUserRequest, "id">, id?: string): CreateUserResponse | string {
        if (!id || typeof id !== "string") {
            throw new Error("O ID não foi informado ou não é do tipo string");
        }
        if (!name || typeof name !== "string") {
            throw new Error("O Nome não foi informado ou não é do tipo string");
        }
        if (!age || typeof age !== "number") {
            throw new Error("A Idade não foi informada ou não é do tipo number");
        }
        if (age < 18) {
            throw new Error("Menores de 18 ANOS não podem se cadastrar");
        }

        const newUser = new User({ id, name, age });

        return newUser;
    }
}

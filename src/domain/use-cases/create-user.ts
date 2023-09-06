import { User } from "../entities/user";

interface CreateUserRequest {
    id: string;
    name: string;
    age: number;
    msg?: string;
}

type CreateUserResponse = CreateUserRequest;

export class CreateUser {
    create({ id, name, age }: CreateUserRequest): CreateUserResponse | any {
        try {
            if (!id || typeof id !== "string") {
                throw "O ID não foi informado ou não é do tipo string";
            }
            if (!name || typeof name !== "string") {
                throw "O Nome não foi informado ou não é do tipo string";
            }
            if (!age || typeof age !== "number") {
                throw "A Idade não foi informada ou não é do tipo number";
            }
            if (age < 18) {
                throw "Menores de 18 ANOS não podem se cadastrar";
            }

            const cUser = new User({ id, name, age });

            const newUser: CreateUserResponse = {
                id: cUser.id,
                name: cUser.name,
                age: cUser.age,
                msg: "Usuário criado com sucesso!",
            };

            return newUser;
        } catch (error) {
            return { Erro: error };
        }
    }
}

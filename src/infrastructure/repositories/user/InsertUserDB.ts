import { User } from "../../../domain/entities/User";
import { ICreateUserRepository } from "../../contracts/user/IUserRepository";

export class InsertUserDB implements ICreateUserRepository {
    async execute(user: User): Promise<void> {
        console.log("Usuário inserido no BD com sucesso!");
        console.log(user);
    }
}

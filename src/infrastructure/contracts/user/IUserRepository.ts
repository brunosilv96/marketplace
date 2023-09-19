import { User } from "../../../domain/entities/User";

export interface ICreateUserRepository {
    execute(user: User): Promise<void>;
}

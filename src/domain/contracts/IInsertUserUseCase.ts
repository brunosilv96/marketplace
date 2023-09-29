import { User } from "../entities/User";

export interface IInsertUserUseCase {
    exec({ name, email, password, phone }: User): Promise<User>;
}

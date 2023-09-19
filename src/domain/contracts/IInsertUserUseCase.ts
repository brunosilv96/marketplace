import { User } from "../entities/User";

export interface IInsertUserUseCase {
    exec({ id, name, job, age }: User): User;
}

import { User as UserEntity } from "../../../domain/entities/User";
export interface IUserRepository {
    insertUser(user: UserEntity): Promise<any>;
    findAllUsers(): Promise<[]>;
    getUserByEmail(email: string): Promise<any>;
}

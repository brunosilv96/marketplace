import { User as UserEntity } from "../../../domain/entities/User";
export interface IUserRepository {
    insertUser(user: UserEntity): Promise<any>;
    getUserByEmail(email: string): Promise<any>;
}

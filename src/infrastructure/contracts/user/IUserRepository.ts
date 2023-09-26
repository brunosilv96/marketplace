import { User as UserEntity } from "../../../domain/entities/User";
export interface IUserRepository {
    insert(user: UserEntity): Promise<any>;
}

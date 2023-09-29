import { User as UserEntity } from "../../domain/entities/User";
import { IUserRepository } from "../contracts/user/IUserRepository";
import { User } from "../orm/mongoose/schemas/User";

export class UserRepository implements IUserRepository {
    async insertUser(userEntity: UserEntity): Promise<any> {
        try {
            const user = new User(userEntity);
            const newUser = await user.save();
            return newUser;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getUserByEmail(email: string): Promise<any> {
        try {
            const user = await User.findOne({ email: email });
            return user;
        } catch (error: any) {
            throw Error(error);
        }
    }
}

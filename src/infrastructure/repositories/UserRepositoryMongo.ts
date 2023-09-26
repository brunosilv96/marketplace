import { User as UserEntity } from "../../domain/entities/User";
import { IUserRepository } from "../contracts/user/IUserRepository";
import { User } from "../orm/mongoose/schemas/User";

export class UserRepository implements IUserRepository {
    async insert(userEntity: UserEntity): Promise<any> {
        try {
            const userExist = await User.findOne({ email: userEntity.email });

            if (userExist) {
                throw new Error("E-mail já cadastrado");
            }

            const user = new User(userEntity);

            const newUser = await user.save();

            return newUser;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

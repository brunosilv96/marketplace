import { IUserRepository } from "../../infrastructure/contracts/user/IUserRepository";
import { IFindUserUseCase } from "../contracts/IFindUserUseCase";

export class FindUserUseCase implements IFindUserUseCase {
    userRepository: IUserRepository;

    constructor(userRepo: IUserRepository) {
        this.userRepository = userRepo;
    }

    async findAllUser(): Promise<any> {
        try {
            const users = await this.userRepository.findAllUsers();

            if (users === null) {
                throw new Error("Não há usuários cadastrados");
            }

            return users;
        } catch (error: any) {
            throw Error(error);
        }
    }

    async findUserByEmail(email: string): Promise<any> {
        try {
            const user = await this.userRepository.getUserByEmail(email);

            if (user === null) {
                throw new Error("E-mail não cadastrado");
            }

            return user;
        } catch (error: any) {
            throw Error(error);
        }
    }
}

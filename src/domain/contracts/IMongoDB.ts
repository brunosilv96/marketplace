import { UserDTO } from "../entities/user";

export interface IMongoDB {
    run(user: UserDTO): Promise<void>;
}

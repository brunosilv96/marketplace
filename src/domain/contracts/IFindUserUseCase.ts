export interface IFindUserUseCase {
    findUserByEmail(email: string): Promise<any>;
    findAllUser(): Promise<any>;
}

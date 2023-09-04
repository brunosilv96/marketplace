import type { UserDTO } from "../../domain/user/UserDTO";

export class UserUseCase implements UserDTO {
    id;
    name;
    age;

    constructor(id: string, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    get getUser() {
        const user = {
            id: this.id,
            name: this.name,
            age: this.age,
        };

        return user;
    }

    createUser() {
        const newUser = {
            id: this.id,
            name: this.name,
            age: this.age,
        };

        console.log("O usuário foi criado com sucesso!");
        console.log(newUser);

        return newUser;
    }
}

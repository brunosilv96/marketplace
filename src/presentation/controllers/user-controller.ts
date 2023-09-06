import { CreateUser } from "../../domain/use-cases/create-user";
import { ExpressAdapter } from "../../app/adapters/ExpressAdapter";

export class UserController {
    adapter;

    constructor(adapter: ExpressAdapter) {
        this.adapter = adapter;
    }

    createUser() {
        try {
            const { id, name, age } = this.adapter.HttpRequest().body;

            const newUser = new CreateUser();

            const userCreated = newUser.create({ id, name, age });

            this.adapter.HttpResponse(201, userCreated);

            console.log("Usuário criado no Controller");
            console.log(userCreated);
        } catch (e) {
            this.adapter.HttpResponse(500, e);
        }
    }
}

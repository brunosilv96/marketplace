import { CreateUser } from "../../domain/use-cases/create-user";
import { ExpressAdapter } from "../../adapters/ExpressAdapter";

export class UserController {
    adapter;

    constructor(adapter: ExpressAdapter) {
        this.adapter = adapter;
    }

    createUser() {
        try {
            const { id, name, age } = this.adapter.HttpRequest().body;

            const newUser = new CreateUser().run({ name, age }, id);

            console.log("Usuário criado no Controller");
            console.log(newUser);

            this.adapter.HttpResponse(201, newUser);
        } catch (e: any) {
            return this.adapter.HttpResponse(422, e.message);
        }
    }
}

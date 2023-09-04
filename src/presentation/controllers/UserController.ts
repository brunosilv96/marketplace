import { UserUseCase } from "../../data/useCases/UserUseCase";
import { ExpressAdapter } from "@/app/adapters/ExpressAdapter";

export class UserController {
    // static createUser(req: Request, res: Response) {
    //     const { id, name, age } = req.body;
    //     if (!id || typeof id !== "string") {
    //         return res.status(422).send(`Não foi informado ID ou não é do tipo texto!`);
    //     }
    //     if (!name || typeof name !== "string") {
    //         return res.status(422).send(`Não foi informado Nome ou não é do tipo texto!`);
    //     }
    //     if (!age || typeof age !== "number") {
    //         return res.status(422).send(`Não foi informado a Idade ou não é do tipo numérico!`);
    //     }
    //     const newUser = new UserUseCase(id, name, age).createUser();
    //     res.status(201).json({ msg: "Usuário criado com sucesso!", newUser });
    // }

    UserModel;

    constructor(UserModel: ExpressAdapter) {
        this.UserModel = UserModel;
    }

    createUser() {
        console.log(this.UserModel.HttpRequest());

        this.UserModel.HttpResponse(201, { msg: "Fluxo completo no controller" });
    }
}

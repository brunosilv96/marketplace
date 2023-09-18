import { HttpRequest, IController } from "../contracts/IController";
import { Request, Response } from "express";

export class ExpressAdapter {
    static acople(controller: IController) {
        return async (request: Request, response: Response) => {
            const newRequest: HttpRequest = {
                headers: request.headers || {},
                body: request.body || {},
                params: request.params || {},
                query: request.query || {},
            };

            const { code, data } = await controller.run(newRequest);

            response.status(code).json(data);
        };
    }
}

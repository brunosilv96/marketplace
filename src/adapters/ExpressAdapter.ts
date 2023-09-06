import { Request, Response } from "express";
import { send } from "process";

export interface Req {
    headers: any | {};
    body: any | {};
    params: any | {};
    query: any | {};
}

export interface ExpressAdapterProps {
    req: Request;
    res: Response;
    HttpRequest(): Req;
    HttpResponse(status: number, data: any): void;
}

export class ExpressAdapter implements ExpressAdapterProps {
    req;
    res;

    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
    }

    HttpRequest(): Req {
        return {
            headers: this.req.header || {},
            body: this.req.body || {},
            params: this.req.params || {},
            query: this.req.query || {},
        };
    }

    HttpResponse(status: number, data: any): void {
        this.res.status(status).json(data);
    }
}

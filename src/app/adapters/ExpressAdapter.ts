import { Request, Response } from "express";

export class ExpressAdapter {
    req;
    res;

    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
    }

    HttpRequest() {
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

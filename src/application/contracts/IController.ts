export type JSONInput = { [key: string]: any };

export interface HttpRequest<H = JSONInput, P = JSONInput, Q = JSONInput, B = JSONInput> {
    headers: H;
    params: P;
    query: Q;
    body: B;
}

export interface HttpResponse<T = any> {
    code: number;
    data: T;
}

export interface IController {
    run(data?: HttpRequest): Promise<HttpResponse>;
}

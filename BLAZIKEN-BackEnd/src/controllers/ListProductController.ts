import { FastifyRequest, FastifyReply } from "fastify";
import { ListProductService } from "../services/ListProductservice";

class ListProductController {
    async handle(_request: FastifyRequest, _reply: FastifyReply){
        const _listProductService = new ListProductService();
        const product = await _listProductService.execute();
        _reply.send(product);
    }
}

export { ListProductController }
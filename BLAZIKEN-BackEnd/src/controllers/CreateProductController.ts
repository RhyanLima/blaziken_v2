import { FastifyRequest, FastifyReply } from "fastify";
import { CreateProductService } from "../services/CreateProductService";

class CreateProductController {
    async handle(_request: FastifyRequest, _reply: FastifyReply){
        const { name, price, base64Image } = _request.body as { name: string, price: number, base64Image: string }
        const _createProductService = new CreateProductService();
        const product = await _createProductService.execute({ name, price, base64Image });
        _reply.send(product)
    }
}

export { CreateProductController }
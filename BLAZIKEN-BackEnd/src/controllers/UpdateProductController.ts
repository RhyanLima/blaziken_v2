import {FastifyRequest, FastifyReply} from "fastify";
import { UpdateProductService } from "../services/UpdateProductService";

interface UpdateProduct {
    name?: string
    price?: number, 
    base64Image?: string 
}

class UpdateProductController {
    async handle(_request: FastifyRequest, _reply: FastifyReply) {
        const { id } = _request.query as { id: string }
        const { name, price, base64Image } = _request.body as UpdateProduct
        const _updateProductService = new UpdateProductService();
        const product = await _updateProductService.execute({ id, name, price, base64Image })
        _reply.send(product)
    }
}

export { UpdateProductController }
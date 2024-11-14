import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteProductService } from "../services/DeleteProductService";

class DeleteProductController {
    async handle(_request: FastifyRequest, _reply: FastifyReply){
        const _deleteProductService = new DeleteProductService();
        const { id } = _request.query as { id: string }
        const user = await _deleteProductService.execute({ id })

    }
}

export { DeleteProductController }
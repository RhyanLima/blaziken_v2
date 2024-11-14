import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController {
    async handle(_request: FastifyRequest, _reply: FastifyReply){
        const _deleteUserService = new DeleteUserService();
        const { id } = _request.query as { id: string }
        const user = await _deleteUserService.execute({ id })

    }
}

export { DeleteUserController }
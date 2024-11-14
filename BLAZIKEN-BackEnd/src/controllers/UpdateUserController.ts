import {FastifyRequest, FastifyReply} from "fastify";
import { UpdateUserService } from "../services/UpdateUserService";

interface UpdateUser {
    name?: string
    email?: string, 
    password?: string 
}

class UpdateUserController {
    async handle(_request: FastifyRequest, _reply: FastifyReply) {
        const { id } = _request.query as { id: string }
        const { name, email, password } = _request.body as UpdateUser
        const _updateUserService = new UpdateUserService();
        const user = await _updateUserService.execute({ id, name, email, password })
        _reply.send(user)
    }
}

export { UpdateUserController }
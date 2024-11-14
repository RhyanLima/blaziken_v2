import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/CreateUserService";

class CreatUserController {
    async handle(_request: FastifyRequest, _reply: FastifyReply) {
        
        const { name, email, password } = _request.body as { name: string, email: string, password: string }

        const _createUserService = new CreateUserService();
        const user = await _createUserService.execute({ name, email, password });
        _reply.send(user)
    }
}

export { CreatUserController }
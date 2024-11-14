import { FastifyRequest, FastifyReply } from "fastify";
import { ListUserService } from "../services/ListUserService";

class ListUserController {
    async handle(_request: FastifyRequest, _reply: FastifyReply){
        const _listUserService = new ListUserService();
        const user = await _listUserService.execute();
        _reply.send(user);
    }
}

export { ListUserController }
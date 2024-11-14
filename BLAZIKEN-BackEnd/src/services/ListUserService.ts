import _prismaClient from "../prisma";

class ListUserService {
    async execute(){
        const _users = await _prismaClient.client.findMany();
        return _users;
    }
}

export { ListUserService }
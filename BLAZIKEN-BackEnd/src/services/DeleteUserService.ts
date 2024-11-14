import { transcode } from "buffer";
import _prismaClient from "../prisma";

interface User {
    id: string
}

class DeleteUserService {
    async execute({ id }: User){
        if(!id){
            throw new Error("missing ID");
        }
        const findUser = await _prismaClient.client.findFirst({
            where:{
                id: id
            }
        })
        if(!findUser){
            throw new Error("user does not exist");
        }
        await _prismaClient.client.delete({
            where:{
                id:id
            }
        })
        return { menssage: "successfully deleted!" }
    }
}

export { DeleteUserService }
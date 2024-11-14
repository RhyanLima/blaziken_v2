import _prismaClient from "../prisma";

interface UpdateUser {
    id: string;
    name?: string
    email?: string, 
    password?: string 
}

class UpdateUserService {
    async execute({ id, name, email, password }: UpdateUser){
        if (!id) {
            throw new Error("invalid request");
        }
        const findUser = await _prismaClient.client.findFirst({
            where: {
                id: id
            }
        });
    
        if (!findUser) {
            throw new Error("user does not exist");
        }
    
        const updatedRegister = await _prismaClient.client.update({
            where: {
                id: findUser.id
            },
            data: {
                name: name,
                email: email,
                password: password 
            }
        });
    
        return { message: "updated record", updatedRegister };
    }
}

export { UpdateUserService }
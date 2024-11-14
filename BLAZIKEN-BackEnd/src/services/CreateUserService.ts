import _prismaClient from "../prisma";

interface User {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }:User) {
    
        if(!name || !email || !password){
            throw new Error("missing fields");
        }

        const _user = await _prismaClient.client.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })
        return _user
    }
}

export { CreateUserService }
import _prismaClient from "../prisma";

interface Product {
    id: string
}

class DeleteProductService {
    async execute({ id }: Product){
        if(!id){
            throw new Error("missing ID");
        }
        const findProduct = await _prismaClient.product.findFirst({
            where:{
                id: id
            }
        })
        if(!findProduct){
            throw new Error("user does not exist");
        }
        await _prismaClient.product.delete({
            where:{
                id:id
            }
        })
        return { menssage: "successfully deleted!" }
    }
}

export { DeleteProductService }
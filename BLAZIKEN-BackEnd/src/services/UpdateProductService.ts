import _prismaClient from "../prisma";

interface UpdateProduct {
    id: string;
    name?: string
    price?: number, 
    base64Image?: string 
}

class UpdateProductService {
    async execute({ id, name, price, base64Image }: UpdateProduct){
        if (!id) {
            throw new Error("invalid request");
        }
        const findProduct = await _prismaClient.product.findFirst({
            where: {
                id: id
            }
        });
    
        if (!findProduct) {
            throw new Error("user does not exist");
        }
    
        const updatedRegister = await _prismaClient.product.update({
            where: {
                id: findProduct.id
            },
            data: {
                name: name,
                price: price,
                base64Image: base64Image
            }
        });
    
        return { message: "updated record", updatedRegister };
    }
}

export { UpdateProductService }
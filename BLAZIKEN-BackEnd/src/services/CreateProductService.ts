import _prismaClient from "../prisma";

interface Product {
    name: string
    price: number
    base64Image: string
}

class CreateProductService {
    async execute({ name, price, base64Image }: Product){
        if(!name || !price){
            throw new Error("missing fields");
        }

        const _product = await _prismaClient.product.create({
            data: {
                name: name,
                price: price,
                base64Image: base64Image
            }
        })
        return _product
    }
}

export { CreateProductService }
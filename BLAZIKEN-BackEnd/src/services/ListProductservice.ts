import _prismaClient from "../prisma";

class ListProductService {
    async execute(){
        const _products = await _prismaClient.product.findMany();
        return _products;
    }
}

export { ListProductService }
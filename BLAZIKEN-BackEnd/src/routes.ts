import { FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginOptions } from "fastify";
import { CreatUserController } from "./controllers/CreateUserController";
import { ListUserController } from "./controllers/ListUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { CreateProductController } from "./controllers/CreateProductController";
import { ListProductController } from "./controllers/ListProductController";
import { DeleteProductController } from "./controllers/DeleteProductController";
import { UpdateProductController } from "./controllers/UpdateProductController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.get("/test", async(request: FastifyRequest, reply: FastifyReply) => {
        return { OK: true }
    })

    fastify.post("/user", async(request: FastifyRequest, reply: FastifyReply) =>{
        return new CreatUserController().handle(request, reply)
    })
    fastify.post("/product", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductController().handle(request,reply)
    })


    fastify.get("/users", async(request: FastifyRequest, reply: FastifyReply) => {
        return new ListUserController().handle(request,reply)
    })
    fastify.get("/products", async(request: FastifyRequest, reply: FastifyReply) => {
        return new ListProductController().handle(request,reply)
    })


    fastify.delete("/user", async(request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request,reply)
    })
    fastify.delete("/product", async(request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteProductController().handle(request,reply)
    })


    fastify.put("/user", async(request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateUserController().handle(request,reply)
    })
    fastify.put("/product", async(request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateProductController().handle(request,reply)
    })



}
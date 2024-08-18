import { fastify } from "fastify";
import cors from "@fastify/cors";
import { v4 as uuid } from "uuid";

const server = fastify();



await server.register(cors, {
  credentials: true,
  origin: false
})

server.get("/posts", (request, reply) => {
  return {
    id: uuid(),
    profilePicture: "https://i.pinimg.com/originals/cb/2c/15/cb2c15f4607465c0d92a92133e44382b.jpg",
    name: "Luis",
    address: "@L-hso",
    text: "Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Casamentiss faiz malandris se pirulitá. Per aumento de cachacis, eu reclamis.",
    likes: 123,
    comments: 100
  };
});

server.listen({ port: process.env.PORT ?? 3333 });

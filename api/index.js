import { fastify } from "fastify";
import cors from "@fastify/cors";
import { v4 as uuid } from "uuid";

const server = fastify();

const posts = [];

await server.register(cors, {
  
  credentials: true,
  origin: "https://symmetrical-space-adventure-r9rj7pxj5jghwq54-5173.app.github.dev",

}) 

server.get("/posts", (request, reply) => {
  return reply.status(200).send(posts);
});

server.post("/posts", (request, reply) =>{
  let id = uuid()


  posts.push({id, ...request.body});

  return reply.status(201).send();
})

server.listen({ port: process.env.PORT ?? 3333 });

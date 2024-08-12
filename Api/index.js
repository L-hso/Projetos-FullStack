import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify();

await fastify.register(cors, { 
  origin: "https://symmetrical-space-adventure-r9rj7pxj5jghwq54-5173.app.github.dev/",
  credentials: true
});


const usuarios = [];


server.post("/cadastrar", (request, response)=>{
  usuarios.push(request.body);

  return response.status(201).send();
})

server.get("/cadastrar", (request, response)=>{
  return usuarios;
})

server.listen({
  port: 3333
})
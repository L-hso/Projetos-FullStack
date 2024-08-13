import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify();

await server.register(cors, { 
  origin: "http://localhost:5173",
  credentials: true,
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
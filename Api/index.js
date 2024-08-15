import fastify from 'fastify';
import cors from '@fastify/cors';
import { CadastroRoutes } from './routes/cadastros.js';

const server = fastify();

export let usuarios = [];

await server.register(cors, {
  origin: "http://localhost:5173",
  credentials: true,
});


server.register(CadastroRoutes);



server.get("/cadastrar", (request, response) => {
  return usuarios;
});

server.listen({
  port: 3333,
});


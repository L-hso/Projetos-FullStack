import { cadastroController } from '../controllers/cadastrar.js';
import { cadastroMiddleware } from '../middleware/verificar-campo.js';

export async function CadastroRoutes(server){
    server.post("/cadastrar", {preValidation: cadastroMiddleware}, cadastroController)
}

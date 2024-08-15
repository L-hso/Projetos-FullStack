import { usuarios } from "../index.js";

export function cadastroController(request, response){
    usuarios.push(request.body);
    return response.status(201).send();
}


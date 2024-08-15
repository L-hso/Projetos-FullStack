export function cadastroMiddleware(request, response, next) {
  const { user, password } = request.body;

  if (user.split("").join("") == "" || password.split("").join("") == "") {
    return response.status(400).send("Preencha os campos corretamente");
  }

  next();
}

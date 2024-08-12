import "./App.css";

function App() {
  return (
    <form action="localhost:3333/cadastrar" method="post" >
      <label>Usuario <br /><input type="text" name="user"/></label>
      <label>Senha <br /><input type="text" name="password" /></label>
      <input type="submit" value="Registrar" />
    </form>
  );
}

export default App;

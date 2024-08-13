import { useRef } from "react";
import "./App.css";
import axios from "axios";

function App() {
  
  const userRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div>
      <label>
        Usuario <br />
        <input type="text" name="user" ref={userRef}/>
      </label>
      <label>
        Senha <br />
        <input type="text" name="password" ref={passwordRef}/>
      </label>
      <button onClick={async ()=> await axios.post("http://localhost:3333/cadastrar", {"name":userRef.current.value, "password":passwordRef.current.value})}>Registrar</button>
    </div>
  );
}

export default App;

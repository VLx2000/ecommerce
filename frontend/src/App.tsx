import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [msg, setMsg] = useState<string>('carregando...');

  useEffect(() => {
    axios
      .get('http://localhost:9000')
      .then((res) => setMsg(res.data as string))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;

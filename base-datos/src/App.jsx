import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Alert from "./components/Alert.jsx";
import Formulario from "./components/Formulario.jsx";
import BaseColaboradores from "./components/BaseColaboradores.js";
import Listado from "./components/Listado.jsx";
import Buscador from "./components/Buscador.jsx";

function App() {
  const [error, setError] = useState({});
  const [data, setData] = useState(BaseColaboradores);
  const [dataFilter, setDataFilter] = useState(data);
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const eliminarUsuario = (id) => {
    const newData = data.filter((user) => user.id !== id);
    setData(newData);
    setDataFilter(newData);
  };

  const agregarUsuario = (nuevoUsuario) => {
    setData([...data, nuevoUsuario]);
    setDataFilter([...data, nuevoUsuario]);
    setRegistroExitoso(true);
    setTimeout(() => {
      setRegistroExitoso(false);
    }, 2000);
  };

  return (
    <main>
      <div className="container">
        <div className="title-css">
          <h1>Agregar colaborador</h1>
        </div>

        <section className="form-css">
          <Formulario
            setError={setError}
            setRegistroExitoso={setRegistroExitoso}
            setData={setData}
            setDataFilter={setDataFilter}
            data={data}
            eliminarUsuario={eliminarUsuario}
            agregarUsuario={agregarUsuario}
          />
          <Alert error={error} registroExitoso={registroExitoso} />
        </section>

        <section className="listado-css">
          <h2>Lista de usuarios</h2>
          <Buscador data={data} setDataFilter={setDataFilter} />
          <Listado
            data={dataFilter}
            setData={setData}
            setDataFilter={setDataFilter}
            eliminarUsuario={eliminarUsuario}
          />
        </section>
      </div>
    </main>
  );
}

export default App;

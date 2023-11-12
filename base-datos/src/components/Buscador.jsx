import React from "react";

const Buscador = ({ data, setDataFilter }) => {
  const inputLook = (e) => {
    const buscarContenido = e.target.value.toLowerCase();

    const resul = data.filter(
      (user) =>
        user.nombre.toLowerCase().includes(buscarContenido) ||
        user.correo.toLowerCase().includes(buscarContenido) ||
        user.edad.toString().includes(buscarContenido) ||
        user.cargo.toLowerCase().includes(buscarContenido) ||
        user.telefono.toString().includes(buscarContenido)
    );

    setDataFilter(resul);
  };

  return (
    <div className="buscador col col-md-6">
      <input
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Buscar un Usuario"
        className="form-control mb-3 buscador-css"
        onChange={inputLook}
      />
    </div>
  );
};

export default Buscador;

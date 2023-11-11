import React, { useState } from 'react';

const Formulario = ({ setError, setRegistroExitoso, agregarUsuario, data }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, edad, cargo, telefono } = formData;
    const validarDatos = !nombre || !email || !edad || !cargo || !telefono;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validarTelefono = telefono.length === 9;

    if (validarDatos || !validarTelefono) {
      setError({
        error: true,
        mensaje: validarTelefono
          ? "Completa los campos correctamente"
          : "El número de teléfono debe tener 9 dígitos",
        color: "danger",
      });
      setRegistroExitoso(false);

      setTimeout(() => {
        setError({
          error: false,
          mensaje: "",
          color: "danger",
        });
      }, 2000);
    } else if (!regexEmail.test(email)) {
      setError({
        error: true,
        mensaje: "El formato del correo electrónico no es válido",
        color: "danger",
      });
      setRegistroExitoso(false);

      setTimeout(() => {
        setError({
          error: false,
          mensaje: "",
          color: "danger",
        });
      }, 2000);
    } else {
      const nuevoUsuario = {
        id: data.length + 1, // Generate a unique ID (assuming the IDs are numbers)
        nombre,
        correo: email,
        edad,
        cargo,
        telefono,
      };

      agregarUsuario(nuevoUsuario);
      setRegistroExitoso(true);
      setFormData({
        nombre: "",
        email: "",
        edad: "",
        cargo: "",
        telefono: "",
      });

      setTimeout(() => {
        setRegistroExitoso(false);
      }, 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="formulario-container">
      <form className='formulario-css' onSubmit={(e) => handleFormSubmit(e)}>
        <div className='form-group mx-3'>
          <input
            className='form-control mb-3'
            type="text"
            name="nombre"
            placeholder='Nombre del colaborador'
            onChange={handleChange}
            value={formData.nombre}
          />
        </div>

        <div className='form-group mx-3'>
          <input
            className='form-control mb-3'
            type="email"
            name="email"
            placeholder='ejemplo@ejemplo.com'
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className='form-group mx-3'>
          <input
            className='form-control mb-3'
            type="number"
            name="edad"
            placeholder='Edad del colaborador'
            onChange={handleChange}
            value={formData.edad}
          />
        </div>

        <div className='form-group mx-3'>
          <input
            className='form-control mb-3'
            type="text"
            name="cargo"
            placeholder='Cargo del colaborador'
            onChange={handleChange}
            value={formData.cargo}
          />
        </div>

        <div className='form-group mx-3'>
          <input
            className='form-control mb-3'
            type="number"
            name="telefono"
            placeholder='Telefono del colaborador'
            onChange={handleChange}
            value={formData.telefono}
          />
        </div>

        <button className="btn btn-primary btn-input-width button-css" type="submit">Agregar un colaborador</button>
      </form>
    </div>
  );
}

export default Formulario;

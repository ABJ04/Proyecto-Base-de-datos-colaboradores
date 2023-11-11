// Listado.jsx
import React from 'react';
import Table from 'react-bootstrap/Table';
import { BsFillTrashFill } from 'react-icons/bs';

const Listado = ({ data, eliminarUsuario }) => {
  const users = data.map((user) => (
    <tr className='align-middle' key={user.id}>
      <td>{user.id}</td>
      <td>{user.nombre}</td>
      <td>{user.correo}</td>
      <td>{user.edad}</td>
      <td>{user.cargo}</td>
      <td>{user.telefono}</td>
      <td>
        <button className='btn btn-link' onClick={() => eliminarUsuario(user.id)}>
          <BsFillTrashFill />
        </button>
      </td>
    </tr>
  ));

  return (
    <div className='table-responsive col-12 col-lg-8 mb-2 text-center lista-css'>
      <Table variant='light' className='table table-striped '>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>{users}</tbody>
      </Table>
    </div>
  );
};

export default Listado;

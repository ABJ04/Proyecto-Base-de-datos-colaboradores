import React from 'react';

const Alert = ({ error, registroExitoso }) => {
  return (
    <section>
      {error.error && (
        <div className={`alerta-css alert alert-${error.color}`} role="alert">
          {error.mensaje}
        </div>
      )}

      {registroExitoso && (
        <div className="alerta-css alert alert-success" role="alert">
          Se creó con éxito
        </div>
      )}
    </section>
  );
}

export default Alert;

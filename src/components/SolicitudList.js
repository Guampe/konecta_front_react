import React, { useState, useEffect } from 'react';

const SolicitudList = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    fetchSolicitudes();
  }, []);

  const fetchSolicitudes = async () => {
    try {
      const res = await fetch('http://localhost:3000/solicitudes');
      if (!res.ok) {
        throw new Error('Error al cargar las solicitudes');
      }
      const data = await res.json();
      setSolicitudes(data);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleEliminarSolicitud = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/solicitudes/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) {
        throw new Error('Error al eliminar la solicitud');
      }
      fetchSolicitudes(); // Actualizar la lista después de eliminar
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container">
      <h2>Listado de Solicitudes</h2>
      <ul>
        {solicitudes.map(solicitud => (
          <li key={solicitud.id_solicitud}>
            {solicitud.descripcion} - Empleado: {solicitud.nombreEmpleado}
            <button onClick={() => handleEliminarSolicitud(solicitud.id_solicitud)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolicitudList;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmpleadoList = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    fetchEmpleados();
  }, []);

  const fetchEmpleados = async () => {
    try {
      const res = await fetch('http://localhost:3000/empleados');
      if (!res.ok) {
        throw new Error('Error al cargar los empleados');
      }
      const data = await res.json();
      setEmpleados(data);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleEliminarEmpleado = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/empleados/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) {
        throw new Error('Error al eliminar el empleado');
      }
      fetchEmpleados(); // Actualizar la lista después de eliminar
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container">
      <h2>Listado de Empleados</h2>
      <ul>
        {empleados.map(empleado => (
          <li key={empleado.ID}>
            {empleado.nombre} - Salario: {empleado.salario}
            <div>
              <Link to={`/editar-empleado/${empleado.ID}`}>Editar</Link>
              <button onClick={() => handleEliminarEmpleado(empleado.ID)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmpleadoList;



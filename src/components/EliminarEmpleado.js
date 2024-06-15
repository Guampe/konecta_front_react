import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EliminarEmpleado = () => {
  const [empleados, setEmpleados] = useState([]);
  const [selectedEmpleado, setSelectedEmpleado] = useState(null);
  const navigate = useNavigate();

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

  const handleSelectEmpleado = (e) => {
    const empleadoId = e.target.value;
    const empleado = empleados.find(emp => emp.ID === parseInt(empleadoId));
    setSelectedEmpleado(empleado);
  };

  const handleEliminarEmpleado = async () => {
    try {
      const res = await fetch(`http://localhost:3000/empleados/${selectedEmpleado.ID}`, {
        method: 'DELETE'
      });
      if (!res.ok) {
        throw new Error('Error al eliminar el empleado');
      }
      navigate('/empleados');
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container">
      <h2>Eliminar Empleado</h2>
      <select onChange={handleSelectEmpleado} value={selectedEmpleado ? selectedEmpleado.ID : ''}>
        <option value="">Seleccione un empleado</option>
        {empleados.map(empleado => (
          <option key={empleado.ID} value={empleado.ID}>
            {empleado.nombre}
          </option>
        ))}
      </select>
      {selectedEmpleado && (
        <div>
          <p>¿Está seguro que desea eliminar a {selectedEmpleado.nombre}?</p>
          <button onClick={handleEliminarEmpleado}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default EliminarEmpleado;




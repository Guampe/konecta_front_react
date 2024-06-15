import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ModificarEmpleado = () => {
  const [empleados, setEmpleados] = useState([]);
  const [selectedEmpleado, setSelectedEmpleado] = useState(null);
  const [empleadoForm, setEmpleadoForm] = useState({
    fecha_ingreso: '',
    nombre: '',
    salario: ''
  });
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

  const handleChange = (e) => {
    setEmpleadoForm({
      ...empleadoForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectEmpleado = (e) => {
    const empleadoId = e.target.value;
    const empleado = empleados.find(emp => emp.ID === parseInt(empleadoId));
    setSelectedEmpleado(empleado);
    setEmpleadoForm(empleado || { fecha_ingreso: '', nombre: '', salario: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/empleados/${selectedEmpleado.ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(empleadoForm)
      });
      if (!res.ok) {
        throw new Error('Error al actualizar el empleado');
      }
      await res.json();
      navigate('/empleados');
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container">
      <h2>Modificar Empleado</h2>
      <select onChange={handleSelectEmpleado} value={selectedEmpleado ? selectedEmpleado.ID : ''}>
        <option value="">Seleccione un empleado</option>
        {empleados.map(empleado => (
          <option key={empleado.ID} value={empleado.ID}>
            {empleado.nombre}
          </option>
        ))}
      </select>
      {selectedEmpleado && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Fecha de Ingreso</label>
            <input type="date" name="fecha_ingreso" value={empleadoForm.fecha_ingreso} onChange={handleChange} />
          </div>
          <div>
            <label>Nombre</label>
            <input type="text" name="nombre" value={empleadoForm.nombre} onChange={handleChange} />
          </div>
          <div>
            <label>Salario</label>
            <input type="number" name="salario" value={empleadoForm.salario} onChange={handleChange} />
          </div>
          <button type="submit">Actualizar</button>
        </form>
      )}
    </div>
  );
};

export default ModificarEmpleado;





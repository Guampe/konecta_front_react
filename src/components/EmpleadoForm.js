import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EmpleadoForm = () => {
  const [empleadoForm, setEmpleadoForm] = useState({
    fecha_ingreso: '',
    nombre: '',
    salario: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchEmpleadoById(id);
    }
  }, [id]);

  const fetchEmpleadoById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/empleados/${id}`);
      if (!res.ok) {
        throw new Error('Error al cargar el empleado');
      }
      const data = await res.json();
      setEmpleadoForm(data);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (id) {
        res = await fetch(`http://localhost:3000/empleados/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(empleadoForm)
        });
      } else {
        res = await fetch('http://localhost:3000/empleados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(empleadoForm)
        });
      }
      if (!res.ok) {
        throw new Error('Error al guardar el empleado');
      }
      await res.json();
      navigate('/empleados');
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container">
      <h2>{id ? 'Editar Empleado' : 'Agregar Empleado'}</h2>
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
        <button type="submit">{id ? 'Actualizar' : 'Crear'}</button>
      </form>
    </div>
  );
};

export default EmpleadoForm;




import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SolicitudForm = () => {
  const [solicitudForm, setSolicitudForm] = useState({
    codigo: '',
    descripcion: '',
    resumen: '',
    id_empleado: ''
  });
  const [empleados, setEmpleados] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmpleados();
    if (id) {
      fetchSolicitudById(id);
    }
  }, [id]);

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

  const fetchSolicitudById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/solicitudes/${id}`);
      if (!res.ok) {
        throw new Error('Error al cargar la solicitud');
      }
      const data = await res.json();
      setSolicitudForm(data);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleChange = (e) => {
    setSolicitudForm({
      ...solicitudForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (id) {
        res = await fetch(`http://localhost:3000/solicitudes/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(solicitudForm)
        });
      } else {
        res = await fetch('http://localhost:3000/solicitudes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(solicitudForm)
        });
      }
      if (!res.ok) {
        throw new Error('Error al guardar la solicitud');
      }
      await res.json();
      navigate('/solicitudes');
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container">
      <h2>{id ? 'Editar Solicitud' : 'Agregar Solicitud'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Código</label>
          <input type="text" name="codigo" value={solicitudForm.codigo} onChange={handleChange} />
        </div>
        <div>
          <label>Descripción</label>
          <input type="text" name="descripcion" value={solicitudForm.descripcion} onChange={handleChange} />
        </div>
        <div>
          <label>Resumen</label>
          <input type="text" name="resumen" value={solicitudForm.resumen} onChange={handleChange} />
        </div>
        <div>
          <label>Empleado</label>
          <select name="id_empleado" value={solicitudForm.id_empleado} onChange={handleChange}>
            <option value="">Seleccione un empleado</option>
            {empleados.map(empleado => (
              <option key={empleado.ID} value={empleado.ID}>
                {empleado.nombre}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">{id ? 'Actualizar' : 'Crear'}</button>
      </form>
    </div>
  );
};

export default SolicitudForm;


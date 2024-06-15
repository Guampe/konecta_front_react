import React, { useState } from 'react';
import './App.css';

const SolicitudForm = () => {
    const [solicitud, setSolicitud] = useState({
        codigo: '',
        descripcion: '',
        resumen: '',
        id_empleado: ''
    });

    const handleChange = (e) => {
        setSolicitud({
            ...solicitud,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/solicitudes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(solicitud)
            });
            if (!res.ok) {
                throw new Error('Error al guardar la solicitud');
            }
            const data = await res.json();
            console.log(data);
            // Limpiar el formulario después de enviar
            setSolicitud({
                codigo: '',
                descripcion: '',
                resumen: '',
                id_empleado: ''
            });
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div className="container">
            <h2>Agregar Solicitud</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Código</label>
                    <input type="text" name="codigo" value={solicitud.codigo} onChange={handleChange} />
                </div>
                <div>
                    <label>Descripción</label>
                    <input type="text" name="descripcion" value={solicitud.descripcion} onChange={handleChange} />
                </div>
                <div>
                    <label>Resumen</label>
                    <input type="text" name="resumen" value={solicitud.resumen} onChange={handleChange} />
                </div>
                <div>
                    <label>ID Empleado</label>
                    <input type="number" name="id_empleado" value={solicitud.id_empleado} onChange={handleChange} />
                </div>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default SolicitudForm;


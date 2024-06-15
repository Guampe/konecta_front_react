import React, { useState } from 'react';
import './App.css';

const EmpleadoForm = () => {
    const [empleado, setEmpleado] = useState({
        fecha_ingreso: '',
        nombre: '',
        salario: ''
    });

    const handleChange = (e) => {
        setEmpleado({
            ...empleado,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/empleados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(empleado)
            });
            if (!res.ok) {
                throw new Error('Error al guardar el empleado');
            }
            const data = await res.json();
            console.log(data);
            // Limpiar el formulario después de enviar
            setEmpleado({
                fecha_ingreso: '',
                nombre: '',
                salario: ''
            });
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div className="container">
            <h2>Agregar Empleado</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Fecha de Ingreso</label>
                    <input type="date" name="fecha_ingreso" value={empleado.fecha_ingreso} onChange={handleChange} />
                </div>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="nombre" value={empleado.nombre} onChange={handleChange} />
                </div>
                <div>
                    <label>Salario</label>
                    <input type="number" name="salario" value={empleado.salario} onChange={handleChange} />
                </div>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default EmpleadoForm;


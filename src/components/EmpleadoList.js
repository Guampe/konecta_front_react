import React, { useState, useEffect } from 'react';
import './App.css';

const EmpleadoList = () => {
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
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
        fetchEmpleados();
    }, []);

    return (
        <div className="container">
            <h2>Lista de Empleados</h2>
            <ul>
                {empleados.map(empleado => (
                    <li key={empleado.ID}>{empleado.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmpleadoList;

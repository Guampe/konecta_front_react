import React, { useState, useEffect } from 'react';
import './App.css';

const SolicitudList = () => {
    const [solicitudes, setSolicitudes] = useState([]);

    useEffect(() => {
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
        fetchSolicitudes();
    }, []);

    return (
        <div className="container">
            <h2>Lista de Solicitudes</h2>
            <ul>
                {solicitudes.map(solicitud => (
                    <li key={solicitud.id_solicitud}>
                        {solicitud.codigo} - {solicitud.nombre_empleado}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SolicitudList;


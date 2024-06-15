import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmpleadoList from './components/EmpleadoList';
import EmpleadoForm from './components/EmpleadoForm';
import SolicitudList from './components/SolicitudList';
import SolicitudForm from './components/SolicitudForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/empleados">Empleados</Link>
            </li>
            <li>
              <Link to="/crear-empleado">Crear Empleado</Link>
            </li>
            <li>
              <Link to="/solicitudes">Solicitudes</Link>
            </li>
            <li>
              <Link to="/crear-solicitud">Crear Solicitud</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/empleados" element={<EmpleadoList />} />
          <Route path="/crear-empleado" element={<EmpleadoForm />} />
          <Route path="/solicitudes" element={<SolicitudList />} />
          <Route path="/crear-solicitud" element={<SolicitudForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmpleadoList from './components/EmpleadoList';
import EmpleadoForm from './components/EmpleadoForm';
import SolicitudList from './components/SolicitudList';
import SolicitudForm from './components/SolicitudForm';
import ModificarEmpleado from './components/ModificarEmpleado';
import EliminarEmpleado from './components/EliminarEmpleado';
import './components/App.css'; 


function App() {
  return (
    <Router>
      <div className="app-container">
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
            <li>
              <Link to="/modificar-empleado">Modificar Empleado</Link>
            </li>
            <li>
              <Link to="/eliminar-empleado">Eliminar Empleado</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/empleados" element={<EmpleadoList />} />
          <Route path="/crear-empleado" element={<EmpleadoForm />} />
          <Route path="/editar-empleado/:id" element={<EmpleadoForm />} />
          <Route path="/solicitudes" element={<SolicitudList />} />
          <Route path="/crear-solicitud" element={<SolicitudForm />} />
          <Route path="/modificar-empleado" element={<ModificarEmpleado />} />
          <Route path="/eliminar-empleado" element={<EliminarEmpleado />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

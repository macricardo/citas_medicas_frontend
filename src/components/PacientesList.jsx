import React, { useEffect, useState } from 'react';

function PacientesList({ goBack }) {
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/pacientes')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch pacientes');
        return res.json();
      })
      .then((data) => setPacientes(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={goBack} style={{ marginBottom: '20px', padding: '10px 20px' }}>
        Back
      </button>
      <h1>Pacientes</h1>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>RFC</th>
            <th>Dirección</th>
            <th>Status ID</th>
            <th>Creado</th>
            <th>Actualizado</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{paciente.nombre}</td>
              <td>{paciente.email}</td>
              <td>{paciente.telefono}</td>
              <td>{paciente.rfc}</td>
              <td>{paciente.direccion}</td>
              <td>{paciente.statusId}</td>
              <td>{paciente.fechaCreado}</td>
              <td>{paciente.fechaUpdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PacientesList;
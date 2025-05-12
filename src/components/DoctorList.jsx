import React, { useEffect, useState } from 'react';

function DoctorList({ goBack }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/doctores')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch doctors');
        return res.json();
      })
      .then((data) => setDoctors(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={goBack} style={{ marginBottom: '20px', padding: '10px 20px' }}>
        Back
      </button>
      <h1>Doctores</h1>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>RFC</th>
            <th>Status ID</th>
            <th>Consultorio ID</th>
            <th>Creado</th>
            <th>Actualizado</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.nombre}</td>
              <td>{doctor.email}</td>
              <td>{doctor.telefono}</td>
              <td>{doctor.rfc}</td>
              <td>{doctor.statusId}</td>
              <td>{doctor.consultorioId}</td>
              <td>{doctor.fechaCreado}</td>
              <td>{doctor.fechaUpdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorList;
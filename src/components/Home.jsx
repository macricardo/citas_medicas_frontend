import React, { useState } from 'react';
import DoctorList from './DoctorList';
import PacientesList from './PacientesList';

function Home() {
  const [showDoctors, setShowDoctors] = useState(false);
  const [showPacientes, setShowPacientes] = useState(false);

  if (showDoctors) {
    return <DoctorList goBack={() => setShowDoctors(false)} />;
  }

  if (showPacientes) {
    return <PacientesList goBack={() => setShowPacientes(false)} />;
  }

  return (
    <div>
      <button
        onClick={() => setShowDoctors(true)}
        style={{
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
        }}
      >
        Doctores
      </button>
      <button
        onClick={() => setShowPacientes(true)}
        style={{
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
        }}
      >
        Pacientes
      </button>
    </div>
  );
}

export default Home;
import React from 'react';
import Home from './components/Home';
import Logo from './components/Logo';

function App() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr', // Two rows of equal height
        justifyItems: 'center', // Center items horizontally
        alignItems: 'center', // Center items vertically within their row
        height: '100vh', // Full height of the viewport
        width: '100vw', // Full width of the viewport
        margin: '0', // Remove any default margin
      }}
    >
      <Logo />
      <Home />
    </div>
  );
}

export default App;
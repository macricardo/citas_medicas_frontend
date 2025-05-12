import React from 'react';
import logo from '../assets/midoctor.png';

function Logo() {
  return (
    <img
      src={logo}
      alt="Mi Doctor Logo"
      style={{
        maxWidth: '200px',
        height: 'auto'
      }}
    />
  );
}

export default Logo;
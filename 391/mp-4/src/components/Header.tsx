import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      padding: '1.5rem', 
      backgroundColor: '#1e1e1e', 
      textAlign: 'center' 
    }}>
      <h1 style={{ 
        fontSize: '2rem', 
        color: '#ffffff', 
        margin: 0 
      }}>
        🎧 Freesound Search App
      </h1>
    </header>
  );
};

export default Header;
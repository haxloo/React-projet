import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ padding: '10px', background: '#282c34', color: 'white' }}>
    <nav>
      <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Accueil</Link>
      <Link to="/liste" style={{ margin: '0 10px', color: 'white' }}>Liste</Link>
    </nav>
  </header>
);

export default Header;

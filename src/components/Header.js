import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">MétéoApp</Link>
        <nav className="navbar-nav">
          <Link className="nav-link" to="/">Accueil</Link>
          <Link className="nav-link" to="/liste">Liste</Link>
          <Link className="nav-link" to="/carte">Carte</Link>
          <Link className="nav-link" to="/favoris">Favoris</Link>
          <Link className="nav-link" to="/about">À propos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

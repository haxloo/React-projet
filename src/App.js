import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Liste from './pages/Liste';
import Detail from './pages/Detail';
import Carte from './pages/Carte';
import Favoris from './pages/Favoris';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/liste" element={<Liste />} />
        <Route path="/detail/:city" element={<Detail />} />
        <Route path="/carte" element={<Carte />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Liste from './pages/Liste';
import Detail from './pages/Detail';
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


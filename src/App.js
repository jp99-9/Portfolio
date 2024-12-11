import './css/menu.css';
import './App.css';
import './css/inicio.css';
import './css/contacto.css';
import { Newsletter } from './pages/Newsletter';
import { Inicio } from './pages/Inicio';
import { Contact } from './pages/Contact';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Project } from './pages/Project';
import { Footer } from './componentes/Footer';


function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Newsletter" element={<Newsletter />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
      <Footer />
    </div>



  );
}

export default App;

import './css/menu.css';
import './App.css';
import './css/inicio.css';
import './css/contacto.css';

import { Inicio } from './componentes/Inicio';
import { Contact } from './componentes/Contact';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (

    <div>


      <Routes>


        <Route path="/" element={<Inicio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>




    </div>



  );
}

export default App;

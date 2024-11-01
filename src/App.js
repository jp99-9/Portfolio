import './css/menu.css';
import './App.css';
import './css/inicio.css';
import { Header } from './componentes/Header';
import { Inicio } from './componentes/Inicio';
import React from 'react';

function App() {
  return (
    <div>
      <header className='barra'>
        <Header verContacto={true}/>
      </header>
      <section className='inicio'>
        <Inicio />
      </section>

    </div>




  );
}

export default App;

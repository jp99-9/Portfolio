import './css/menu.css'
import './App.css';
import { Header } from './componentes/Header';
import { Inicio } from './componentes/Inicio';

function App() {
  return (
    <div>
      <header className='barra'>
        <Header />
      </header>
      <Inicio />
    </div>




  );
}

export default App;

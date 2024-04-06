import './App.css'
import Navbar from './componentes/navbar/Navbar';
import Inicio from './componentes/inicio/Inicio';
import Barra from './componentes/barra/Barra';
import Beneficios from './componentes/beneficios/Beneficios';
import Novedades from './componentes/novedades/Novedades';
import Servicios from './componentes/servicios/Servicios';
import Contacto from './componentes/contacto/Contacto';
import Footer from './componentes/footer/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <Inicio />
      <Barra />
      <Beneficios />
      <Novedades />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App

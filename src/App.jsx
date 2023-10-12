
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { SobreNosotros } from './components/SobreNosotros';
import { Servicios } from './components/Servicios';
import { Seguros } from './components/Seguros';
import { Contacto } from './components/Contacto';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} ></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sobrenosotros' element={<SobreNosotros />}></Route>
        <Route path='/servicios' element={<Servicios />}></Route>
        <Route path='/seguros' element={<Seguros />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Presentacion from './Componentes/Home/Presentacion';
import Navbar from './Componentes/Navbar/Navbar';
import Franquicia from './Componentes/Home/Franquicia';
import Menu from './Componentes/Home/Menu'
import Servicios from './Componentes/Home/Servicios';
import Videos from './Componentes/Home/Videos';
import Footer from './Componentes/Footer/Footer';
import SobreNosotros from './Componentes/SobreNosotros/SobreNosotros';
import Carrito from './Componentes/Carrito/Carrito';
import FoodPage from './Componentes/FoodPage/FoodPage';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path='/' element = {
        <> 
      <Presentacion/>
      <Videos/>
      <Franquicia/>
      <Menu/>
      <Servicios/>
      </>
      }></Route>
      <Route path='/SobreNosotros' element={<SobreNosotros/>} ></Route>
      <Route path='/Carrito' element={<Carrito/>}></Route>
      <Route path='/FoodPage' element={<FoodPage/>}></Route>
    </Routes>
  
    <Footer/>

    </BrowserRouter>
     
    </>
  )
}

export default App

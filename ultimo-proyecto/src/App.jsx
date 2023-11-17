import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Presentacion from './Componentes/Home/Presentacion';
import Navbar from './Componentes/Navbar/Navbar';
import Franquicia from './Componentes/Home/Franquicia';
import Menu from './Componentes/Home/Menu'
import Servicios from './Componentes/Home/Servicios';
import Videos from './Componentes/Home/Videos';
import Footer from './Componentes/Footer/Footer';
import SobreNosotros from './Componentes/SobreNosotros/SobreNosotros';
import {ListaCompras} from './Componentes/CarritoAni/ListaCompras/ListaCompra';
import {ProductosProvider} from './Componentes/Context/ProductosProvider'
import{CarritoProvider} from './Componentes/Context/CarritoProvider';
import{ComprasPage} from './Componentes/CarritoAni/Pages/ComprasPage/ComprasPage';
import {CarritoPage} from './Componentes/CarritoAni/Pages/CarritoPage/CarritoPage';


function App() {

  return (
    <>
    <ProductosProvider>
      <CarritoProvider>

   
      <BrowserRouter>
    
        <Navbar />
        
        <Routes>

          <Route path='/' element={
            <>
              <Presentacion />
              <Videos />
              <Franquicia />
              <Menu />
              <Servicios />
              <Footer />
            </>
          }></Route>
          <Route path='/SobreNosotros' element={<SobreNosotros />} ></Route>
          <Route path='/ListaCompras' element={<ListaCompras />}></Route>
          <Route path='/ComprasPage' element={<ComprasPage />}></Route>
          <Route path='/Carrito' element={<CarritoPage/>}></Route>
        
        </Routes>

      </BrowserRouter>
      </CarritoProvider>
      </ProductosProvider>
    </>
  )
}

export default App

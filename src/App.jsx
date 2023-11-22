// import './App.css'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Route, Routes,  } from 'react-router';
 import Primeravista from './Componentes/PrimeraVista/primeravista';
import Login from './Componentes/login/Login'
import Registro from './Componentes/registro/Registro';
import Presentacion from './Componentes/Home/Presentacion';
import Videos from './Componentes/Home/Videos';
import Franquicia from './Componentes/Home/Franquicia';
import Menu from './Componentes/Home/Menu';
import Servicios from './Componentes/Home/Servicios';
import SobreNosotros from './Componentes/SobreNosotros/SobreNosotros'
import Footer from './Componentes/Footer/Footer';
import Navbar from './Componentes/Home/Navbar';
import ListaCompras from './Componentes/Cart/ListaCompras/ListaCompra';
import ProductosProvider from './Componentes/Cart/Context/ProductosProvider';
import CarritoProvider from './Componentes/Cart/Context/CarritoProvider';
import ComprasPage from './Componentes/Cart/Pages/ComprasPage';
import CarritoPage from './Componentes/Cart/Pages/CarritoPage';
import Admin from './Componentes/Admin/AdminProductos';



function App() {

  return (
    <>
<ProductosProvider>
  <CarritoProvider>

<Routes>
 

<Route >


{/* //La primera vista seria la pagina q uno ve si no esta logiado ni registrado */}
<Route index element={<Primeravista/>} />

<Route path='/login' element={<Login/>}/>
<Route path='/registro' element={<Registro/>}/>
<Route path='/Sobrenosotros' element={<SobreNosotros/>}/>
<Route path='/ListaCompras' element={<ListaCompras/>}/>
<Route path='/ComprasPage' element={<ComprasPage/>}/>
<Route path='/Carrito' element={<CarritoPage/>}/>
<Route path='/Admin' element={<Admin/>}/>

{/* // y la home principal seria la pagina que la gente puede ver cuando ya se registro o logio */}
<Route path='Homeprincipal' element={
  <>
  
   <Navbar/>
  
   <Presentacion/>
<Videos/>
<Franquicia/>
<Menu/>
<Servicios/>
    <Footer/>
    
</>

}    />

</Route>

   </Routes>
   </CarritoProvider>
   </ProductosProvider>
    </>
  )
}

export default App







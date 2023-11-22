import './App.css'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Route, Routes,  } from 'react-router';
 import { BrowserRouter } from 'react-router-dom'
 import Primeravista from './Componentes/PrimeraVista/primeravista';
import Login from './Componentes/login/Login'
import Registro from './Componentes/registro/Registro';
 import PrivateRoute from './Componentes/router/privateRoute';
import Presentacion from './Componentes/Homee/Presentacion';
import Videos from './Componentes/Homee/Videos';
import Franquicia from './Componentes/Homee/Franquicia';
import Menu from './Componentes/Homee/Menu';
import Servicios from './Componentes/Homee/Servicios';
import SobreNosotros from './Componentes/SobreNosotros/SobreNosotros'
import Footer from './Componentes/Footer/Footer';
import Navbarrr from './Componentes/Navbar1/Navbar1';


function App() {

  return (
    <>

<Routes>
 

<Route >


{/* //La primera vista seria la pagina q uno ve si no esta logiado ni registrado */}
<Route index element={<Primeravista/>} />

<Route path='login' element={<Login/>}    />

<Route path='registro' element={<Registro/>}    />

<Route path='Sobrenosotros' element={<SobreNosotros/>}/>


{/* // y la home principal seria la pagina que la gente puede ver cuando ya se registro o logio */}
<Route path='Homeprincipal' element={
  
  <PrivateRoute>
   <Navbarrr/>
  
   <Presentacion/>
<Videos/>
<Franquicia/>
<Menu/>
<Servicios/>
    <Footer/>
    
  </PrivateRoute>

}    />

</Route>

   </Routes>
   
   
    </>
  )
}

export default App







   {/* <BrowserRouter>

    <ContainerOutsideExample/>

    <Routes>

      <Route path='/' element = {

<> 
<Presentacion/>
<Videos/>
<Franquicia/>
<Menu/>
<Servicios/>
</>
 }/>


      <Route path='/SobreNosotros' element={<SobreNosotros/>} /> 

    </Routes>

    <Footer/> 

    </BrowserRouter>  */}
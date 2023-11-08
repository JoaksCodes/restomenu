import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Primeravista from '../pages.loginregister/pages/primeravista'
import Navbarrr from '../pages.loginregister/pages/Navbarrr'
import Formulario from '../pages.loginregister/pages/formulario'
import Registro from '../pages.loginregister/pages/registro'
import { Navbar } from 'react-bootstrap';
import PrivateRoute from '../router/privateRoute'
import Home from '../pages.loginregister/pages/home';
import SobreNosotros from '../SobreNosotros/SobreNosotros';



// en esta pagina estoy creando las rutas de los links 

const Approuter = () => {
  return (
   <>
   <Routes>

<Route >

{/* //La primera vista seria la pagina q uno ve si no esta logiado ni registrado */}
<Route index element={<Primeravista/>} />

{/* // el path vendria a ser lo que tengo que poner para que el linck o boton se vaya para esa carpeta, ya sea el formulario porque formulario es el login */}
<Route path='login' element={<Formulario/>}    />


<Route path='registro' element={<Registro/>}    />

<Route path='Sobrenosotros' element={


<SobreNosotros/>


}/>


{/* // y la home principal seria la pagina que la gente puede ver cuando ya se registro o logio */}
<Route path='Homeprincipal' element={
  
  <PrivateRoute>
   

    <Home/>
    

  </PrivateRoute>

}    />





</Route>







   </Routes>
   
   
   
   </>
  )
}

export default Approuter


import Footer from "../../Footer/Footer"
import Tarjetas from "../../Homee/Franquicia"
import Menu from "../../Homee/Menu"
import Presentacion from "../../Homee/Presentacion"
import Servicios from "../../Homee/Servicios"
import Videos from "../../Homee/Videos"


function Home (){


    return(
<>
<h1>
    Hola nose que estoy haciendo desde la home principal
</h1>

<Presentacion/>
<Videos/>
<Tarjetas/>
<Menu/>
<Servicios/>
<Footer/>



 </>

    )
}


export default Home









// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import  Presentacion  from 'src/Componentes/Homee/Presentacion.jsx'
// import { Navbar } from 'react-bootstrap';
// import Franquicia from 'src/Componentes/Homee/Franquicia'
// import Menu from 'src/Componentes/Homee/Menu'
// import Servicios from 'src/Componentes/Homee/Servicios';
// import Videos from 'src/Componentes/Homee/Videos';
// import Footer from 'src/Componentes/Homee/Footer';
// import SobreNosotros from 'src/Componentes/SobreNosotros';
// import 'src/App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';







// function Home ( {}){




//     return(

//         <>
        
//         <div>
//         <BrowserRouter>
//     <Navbar/>
//     <Routes>

//       <Route path='/' element = {
//         <> 
//       < Presentacion />
//       <Videos/>
//       <Franquicia/>
//       <Menu/>
//       <Servicios/>
//       </>
//       }></Route>
//       <Route path='/SobreNosotros' element={<SobreNosotros/>} ></Route>

//     </Routes>
//     <Footer/>

//     </BrowserRouter>
           
           
//         </div>
        
        
        
//         </>
//     )

//     }

    

// export default Home;
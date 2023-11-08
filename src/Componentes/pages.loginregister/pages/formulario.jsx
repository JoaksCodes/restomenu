import {useForm} from './hook/useForm'

import ("./formulario.css")
import {  useNavigate } from "react-router-dom";
import React from "react";
import Footer from '../../Footer/Footer';
import Navbarrr from './Navbarrr';
import { Container } from 'react-bootstrap';





function Formulario ({  }) {


    const navigate = useNavigate();

const { name, email, password, onInputChange, OnresetForm} =
useForm({
    name: "",
    email: "",
    password: "",
});
 
const onLogin = e => {
    e.preventDefault();


    navigate('/Homeprincipal', {
        replace: true,
        state: {
            logged:true,
            name,
        },

    });

    OnresetForm();

};


    return (
        <>
        <Navbarrr/>
        <section className="secformu">

<Container className="contenedorformu ">
        

                <div className="formulariologin">
                   
                <form action="" 
              onSubmit={onLogin}  >

               <h2>Iniciar Sesion</h2>


            <div className="input-contenedor">
            
           <label htmlFor="">Email</label>
        
                <input type="email"
                 name="email"
                  id="email" 
                  autoComplete="off"
                   value={email}
                   required
                   onChange={onInputChange}  />
                   
            
            </div>
            
            
            
            <div className="input-contenedor"> 
            
            <label htmlFor="">Contraseña</label> 
                <input type="password" 
                name="password"
                 id="password"  
                onChange={onInputChange}
                autoComplete="off"
                 value={password}
                 required />
               </div>

               <button>Acceder</button>

            </form>

            <div>
                
                <div className="registar">
                    <p><button className="buton2">Crear cuenta</button></p>
                </div>
            </div>


                </div>

                </Container>

        </section>

<Footer/>

        </>
    )
}

export  default Formulario ;
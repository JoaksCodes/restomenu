 import {useForm} from '../hook/useForm'

import { useState } from "react";
import ("./formulario.css")
 import {  useNavigate } from "react-router-dom";
//  import React, { useState } from "react";
 import Footer from '../../../Footer/Footer';
 import Navbarrr from '../Navbarrr';
 import { Container, Form} from 'react-bootstrap';
import Usertable from '../tableusuarios';



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
       
            navigate('/Homeprincipal',  {
             replace: true,
                state: {
                    logged:true}});
       
            OnresetForm();
                }

    return (
        <>
        <Navbarrr/>

        <section className="secformu">

            

              <Container className="contenedorformu ">
        <div className="formulariologin">


                <Form action=""  onSubmit={onLogin}>
              

               <h2>Iniciar Sesion</h2>


            <div className="input-contenedor">
            
           <label htmlFor="">Email</label>
        
                <input type="email"
                 name="email"
                  id="email" 
                  autoComplete="off"
                   value={email}
                   required
                   onChange={onInputChange} 
                 />
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

               <button type='submit'>Acceder</button>

            </Form>

           
                
                <div className="registar">
                    <p><button className="buton2">Crear cuenta</button></p>
                </div>
            </div>


              

                </Container>

        </section>

<Footer/>

        </>
    )
}

    
    


export  default Formulario ;











   
 
  

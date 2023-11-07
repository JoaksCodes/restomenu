import React from 'react'

import { useNavigate } from 'react-router-dom';
import { useForm } from './hook/useForm';
import Footer from '../../Footer/Footer';
import ("./formulario.css")

const Registro = () => {


    const navigate = useNavigate();

  const { name, email, password, onInputChange, OnresetForm} =
  useForm({
      name: "",
      email: "",
      password: "",
  })

const onregister =(e)=>
{


e.preventDefault();


    navigate('/Homeprincipal', {
        replace: true,
        state: {
            logged:true,
            name,
        },

    });

    OnresetForm();

}
  return (

        <>
        <section className='secformu'>

            <div className="contenedorformu">

                <div className="formulariologin"
                onSubmit={onregister}>
                   

                <form action="" className="formu">
             
               <h2>Registrarse</h2>

               <div className="input-contenedor">
            
            <label htmlFor="">Nombre</label> 
            <input type="name"
             name="name"
              id="name" 
              autoComplete="off"
               value={name}
               required
               onChange={onInputChange}/>

               </div>


            
            <div className="input-contenedor">
            
                <label htmlFor="">Email</label> 
                <input type="email"
                 name="email"
                  id="email" 
                  autoComplete="off"
                   value={email}
                   required
                   onChange={onInputChange}   />

                   </div>
            
            
            
            <div className="input-contenedor"> 
            
            <label htmlFor="">Contraseña</label> 
                <input type="password" 
                name="password"
                 id="password"  
                onChange={onInputChange}
                autoComplete="off"
                 value={password}
                
                 required
                  />
               </div>
               <div className="input-contenedor"> 
            
            <label htmlFor="">Repetir contraseña</label> 
                <input type="password" 
                name="password"
                 id="password"  
                onChange={onInputChange}
                autoComplete="off"
                 value={password}
                
                 required
                  />
               </div>

               <button >Registrarse</button>
            </form>

          
            </div>

            </div>
           

           
        </section>

        <Footer/>
        </>
    )
}
  

export default Registro

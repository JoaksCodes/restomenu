import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import './login.css'
import Navbarrr from "../Navbar1/Navbar1";


const Login = () => {
    const [datosEnviados, cambiarDatosEnviados] = useState(false);
    return (
        <>
        <Navbarrr/>
            <Formik
                initialValues={{
                    usuario: '',
                    contraseña: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.usuario) {
                        errores.usuario = 'Por favor ingrese el usuario.'
                    } else if (!/^[A-Za-z0-9]{4,20}\S+$/g.test(valores.usuario)) {
                        errores.usuario = 'El usuario solo puede tener letras y numeros.'
                    }

                    if (!valores.contraseña) {
                        errores.contraseña = 'Por favor ingrese la contraseña.'
                    } else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g.test(valores.contraseña)) {
                        errores.contraseña = 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.'
                    }

                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    let usuarioRegistrado = valores;
                    resetForm();
                    console.log('Formulario enviado');
                    console.log(usuarioRegistrado);
                    cambiarDatosEnviados(true);
                    setTimeout(() => cambiarDatosEnviados(false), 5000)
                }}
            >
                {({ errors }) => (



                    <section className="secformu">

                    <Container className='contenedorformu'>
                       
                        <div className="formulariologin">


                            <Form >
                                
                                <h2 className="inicia">Inicia sesion</h2>

                                <div className="input-contenedor">
                                    <input
                                        id="usuario"
                                        type="text"
                                        name="usuario"
                                        placeholder="Usuario"
                                    />
                                    <label htmlFor="usuario"></label>

                                    <ErrorMessage name="usuario" component={() => (
                                        <div className="error">{errors.usuario}</div>
                                    )} />
                                </div>


                                <div className="input-contenedor">
                                    <input
                                        id="contraseña"
                                        type="password"
                                        name="contraseña"
                                        placeholder="Contraseña"
                                    />
                                    <label htmlFor="contraseña"></label>
                                    <ErrorMessage name="contraseña" component={() => (
                                        <div className="error text-center">{errors.contraseña}</div>
                                    )} />
                                </div>


                                <Col className="forgot-pass">
                                    <a className="boton" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="">Has olvidado tu contraseña?</a>
                                </Col>


                                <button type="submit" className="button">Iniciar Sesión</button>


                                <Col className="forgot-pass">
                                    <p>No tienes una cuenta? <Link to={"/Registro"} className="signUp-link">Regístrate</Link></p>
                                </Col>


                            </Form>
                        </div>
                    </Container>
                    </section>
                )}
            </Formik >
        </>
    )
}

export default Login
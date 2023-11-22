import { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { methPost } from "../helpers";
import { Link } from "react-router-dom";
import Navbarrr from "../Navbar1/Navbar1";

const Registro = () => {
    const [datosEnviados, cambiarDatosEnviados] = useState(false);
    return (
        <>
        <Navbarrr/>
            <Formik
                initialValues={{
                    usuario: '',
                    correo: '',
                    contraseña: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.usuario) {
                        errores.usuario = 'Por favor ingrese el usuario.'
                    } else if (!/^[A-Za-z0-9]{4,20}\S+$/g.test(valores.usuario)) {
                        errores.usuario = 'El usuario solo puede tener letras y numeros y debe tener entre 4 y 20 caracteres.'
                    }

                    if (!valores.correo) {
                        errores.correo = 'Por favor ingrese el correo electronico.'
                    } else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g.test(valores.correo)) {
                        errores.correo = 'No es un correo electronico valido.'
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
                    methPost(usuarioRegistrado);
                    cambiarDatosEnviados(true);
                    setTimeout(() => cambiarDatosEnviados(false), 5000)
                }}
            >
                {({ errors }) => (
                <section className="secformu">


                    <Container className='contenedorformu'>
                       
                        <div className="formulariologin">


                            <Form className='loginForm text-center'>
                                <h2 className="inicia"> Registrate</h2>
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
                                        id="correo"
                                        type="text"
                                        name="correo"
                                        placeholder="Email"
                                    />
                                    <label htmlFor="correo"></label>
                                    <ErrorMessage name="correo" component={() => (
                                    <div className="error">{errors.correo}</div>
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
                                <button type="submit" className="button">Registrarme</button>
                                {datosEnviados && <p className="usuarioRegistrado">Te registraste con éxito!</p>}
                                <Col className="forgot-pass">
                                    <p>Ya tienes una cuenta? <Link to={"/Login"} className="forgot-pass">Inicia Sesión</Link></p>
                                </Col>                                      
                            </Form>
                        </div>
                    </Container>
                </section>
                )}
            </Formik>
        </>
    )
}

export default Registro


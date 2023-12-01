import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Navbar } from 'reactstrap';
import axios from 'axios';
import '../Admin/AdminProductos.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbarrr from '../Navbars/Navbar';

const Admin = () => {
    //Direccion url de la Api
    const Url="https://spring-roll.onrender.com/api/products";
    //Seccion donde declaramos nuestros estados
    const [listadoPlatos,setListadoPlatos] = useState ([]);
    const [platosModal,setPlatosModal] = useState (false);
    const [updateFlag, setUpdateFlag] = useState(false);
    const [platosForm,setPlatosForm]= useState({
        id: " ",
        titulo: " ",
        precio: " ",
        texto: " ",
        categoria: " ",
        imagen: " ",
        activo:" "
    })
    const [modalType,setModalType] = useState('');
    const [modalDelete,setModalDelete] = useState(false);

    //SECCION DE PETICIONES HTML

    useEffect(()=>{
        const petitionGet = async ()=> {
            try {
                //realiza la peticion GET a la base de datos
                const response = await axios.get(`${Url}/getProducts`);
                const data = response.data;
                //Guarda la informacion de la api en nuestro estado
                setListadoPlatos(data.data);
                
            } catch (error) {
                //Linea para manejar errores
                console.log("No se pudo obtener la informacion de la API",error.message);
            }
        }
        
        petitionGet();
    },[updateFlag]);
    
    //Funcion para hacer petición POST y crear una clase
    const petitionPost = async () => {
        try {
            
            await axios.post(`${Url}/createProducts/`,platosForm)
            .then(response =>{
                //Si la peticion se hace correctamente ejecuta la función para cerrar el modal y cargar nuevamente la lista con las clases
                toggleModal();
                // Actualiza el flag para que el useEffect se ejecute
                setUpdateFlag((prev) => !prev); 
            })
            
        } catch (error) {
            //Linea para manejar errores
            console.log("No se pudo crear el plato",error.message);
        }
    }

    //Función para hacer petición PUT y editar una clase
    const petitionPut = async () => {
        const { id, titulo, precio, texto, categoria, imagen, activo } = platosForm
        try{
            await axios.put(`${Url}/updateProduct/${platosForm.id}`,
                { id, titulo, precio, texto, categoria, imagen, activo }
            )
            .then((response) =>{
                toggleModal();
                setUpdateFlag((prev) => !prev);
            })
        } catch (error) {
            //Linea para manejar errores
            console.log("No se pudo editar el plato",error.message);
        }
    }

    //Funcion para hacer peticion DELETE y eliminar una clase
    const petitionDelete = async () => {
        try{
            await axios.delete(`${Url}/deleteProduct/${platosForm.id}`)
            .then((response) => {
                setModalDelete(false);
                setUpdateFlag((prev) => !prev);
            })
        }catch(error){
            console.log("No se pudo eliminar el plato",error.message);
        }

    }


    //FUNCIONES AUXILIARES

    //Función para abrir y cerrar el modal
    const toggleModal = () => {
       setPlatosModal(!platosModal)
    }
    //Función para cargar el formulario con datos ingresados y hacer la peticion post
    const handleChange=(e)=>{
        e.persist();
        setPlatosForm (prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
        console.log(platosForm);
    }
    
    //Función para seleccionar una clase y editarla
    const seleccionarPlato = (platos)=> {
        setModalType('actualizar')
        setPlatosForm({
            id: platos.id,
            titulo : platos.titulo,
            precio: platos.precio,
            texto: platos.texto,
            categoria: platos.categoria,
            imagen: platos.imagen,
            activo: platos.activo
        })
    }
    
  

  return (
<>
<Navbarrr/>
    <div className='fondoAdmin'>
        <br/>
        <button className="btn btn-success platosBoton" onClick={()=>{setPlatosForm(null),setModalType('crear'),toggleModal()}}>Agregar Plato</button>
        <br/><br/>
        <table className='table'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Categoria</th>
                    <th>Imagen</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listadoPlatos.map((platos) => {
                    return(
                    <tr key={platos.id}>
                        <td>{platos.titulo}</td>
                        <td>{platos.precio}</td>
                        <td>{platos.texto}</td>
                        <td>{platos.categoria}</td>
                        <td>{platos.imagen && <img src={platos.imagen} width={100} alt={platos.titulo} />}</td>
                        <td>{platos.activo? <span style={{ color: 'green',fontSize:'35px' }}>✓</span> : <span className='spanTickyX' style={{ color: 'red',fontSize:'35px' }}>✗</span> }</td>
                        <td>
                            <button className='btn btn-primary' onClick={()=>{seleccionarPlato(platos),toggleModal()}}><i className="bi bi-pencil-square"></i></button>
                            <button className='btn btn-danger'onClick={()=>{seleccionarPlato(platos),setModalDelete(true)}}><i className="bi bi-trash3"></i></button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>

        <Modal isOpen={platosModal} size='lg' centered >
            <ModalHeader style={{display:'block'}}>
                <span onClick={toggleModal} style={{float: 'right',cursor: "pointer"}}>x</span>
            </ModalHeader>

            <ModalBody>
                <div className="form-group">
                    {modalType=='actualizar'? 
                        <><label htmlFor="id">ID:</label>
                        <input className='form-control' type='text' name='id' id='id' readOnly onChange={handleChange} value={platosForm.id}/>
                        <br/></> : null }
                    
                    <label htmlFor="titulo">Nombre:</label>
                    <input className='form-control' type='text' name='titulo' id='titulo' onChange={handleChange} value={platosForm?platosForm.titulo : '' }/>
                    <br/>
                    <label htmlFor="precio">Precio:</label>
                    <input className='form-control' type='text' name='precio' id='precio' onChange={handleChange} value={platosForm? platosForm.precio : ''}/>
                    <br/>
                    <label htmlFor="texto">Descripción:</label>
                    <input className='form-control' type='text' name='texto' id='texto' onChange={handleChange} value={platosForm? platosForm.texto : ''}/>
                    <br/>
                    <label htmlFor="categoria">Categoria:</label>
                    <select className='form-control' name="categoria" id="categoria" onChange={handleChange}value={platosForm? platosForm.categoria: ''}>
                        <option value="">Seleccione la categoria</option>
                        <option value="Platos Calientes">Platos Calientes</option>
                        <option value="Platos Frios">Platos Frios</option>
                        <option value="Postres">Postres</option>

                    </select>
                    <br/>
                    <label htmlFor="imagen">Imagen:</label>
                    <input className='form-control' type='text' name='imagen' id='imagen' onChange={handleChange}value={platosForm? platosForm.imagen: ''}/>
                    <br/>
                    <label htmlFor="activo">Estado:</label>
                    <select className='form-control' name="activo" id="activo" onChange={handleChange}value={platosForm? platosForm.activo: ''}>
                        <option value="">Seleccione si el plato esta activo o no</option>
                        <option value="true">Disponible</option>
                        <option value="false">No Disponible</option>
                    </select>
                </div>
            </ModalBody>

            <ModalFooter>
                {modalType=='crear'?
                <button className="btn btn-success" onClick={petitionPost}>Insertar</button> :
                <button className="btn btn-primary" onClick={()=>{petitionPut(platosForm)}}>Editar</button>
                }
                <button className="btn btn-danger" onClick={toggleModal}>Cancelar</button>
            </ModalFooter>
        </Modal>

        <Modal isOpen={modalDelete} size='lg' centered>
            <ModalBody>
                ¿Estas seguro que deseas eliminar este plato? {platosForm && platosForm.titulo.toUpperCase()}
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={petitionDelete}>Sí</button>
                <button className="btn btn-secondary" onClick={()=>{setModalDelete(false)}}>No</button>
            </ModalFooter>
        </Modal>
    </div>
</>
  )
}

export default Admin

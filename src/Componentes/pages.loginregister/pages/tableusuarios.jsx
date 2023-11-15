const Usertable = (props) => {


return(


    <>
     <table className="table p-3 mt-3">
        <thead className="border table-primary">
            <tr>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <td>Uno</td>
            <td>Dos</td>
            <td>
                <div className="row">
                    <button>Editar</button>
                    <button>Eliminar</button>
                </div>
            </td>
        </tbody>




     </table>
    
    
    </>
)



}

export default Usertable
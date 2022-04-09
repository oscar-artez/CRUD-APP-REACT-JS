import React from 'react'

const CrudTableRow = ({el, setDataToEdit,deleteData}) => {
  let {name, album, id} = el;
  return (
    <tr>
        <td>{name}</td>
        <td>{album}</td>
        <td>
            <button style={{marginRight:'0.5rem'}} onClick={()=>setDataToEdit(el)}>Editar</button>
            <button onClick={()=>deleteData(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default CrudTableRow
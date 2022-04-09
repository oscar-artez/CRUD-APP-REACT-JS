import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'


const initialDb = [
    {
      id:1,
      name: "Volcán",
      album: "Volcán"
    },
    {
      id:2,
      name: "Signos",
      album: "Signos"
    },
    {
      id:3,
      name: "Puente",
      album: "Bocanada"
    },
    {
      id:4,
      name: "A Day in The Life",
      album: "Sgt. Pepper's Lonely Hearts Club Band"
    },
    {
      id:5,
      name: "Nos siguen pegando abajo",
      album: "Clics modernos"
    }
  ]

const CrudAppSinAPI = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit,setDataToEdit]= useState(null);

    const createData = (data) =>{
      data.id = Date.now()

      setDb([...db,data]);
    }

  const updateData = (data) =>{
    let newData = db.map(el => el.id === data.id ? data : el)
      setDb(newData);
  
  }
  const deleteData = (id) =>{
    let isDelete = window.confirm(
      `Estás seguro de eliminar el registro con el id: ${id}?`
    );

    if(isDelete){
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    }else{
      return;
    }

  }

  return (
    <div>
        <h2> CRUD APP</h2>
        <div className='Container-CRUD'>
        <CrudForm
        createData = {createData}
        updateData = {updateData}
        dataToEdit = {dataToEdit}
        setDataToEdit = {setDataToEdit}
        />
        <CrudTable
         data={db} 
         setDataToEdit={setDataToEdit}
         deleteData = {deleteData}
        />
        </div>
    </div>
  )
}

export default CrudAppSinAPI
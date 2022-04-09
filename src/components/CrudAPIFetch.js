import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'


// const initialDb = [
//     {
//       id:1,
//       name: "The Fool on the Hill",
//       album: "Magical Mistery Tour"
//     },
//     {
//       id:2,
//       name: "Come Together",
//       album: "Abbey Road"
//     },
//     {
//       id:3,
//       name: "Help!",
//       album: "Help!"
//     },
//     {
//       id:4,
//       name: "A Day in The Life",
//       album: "Sgt. Pepper's Lonely Hearts Club Band"
//     },
//     {
//       id:5,
//       name: "For You Blue",
//       album: "Let it Be"
//     }
//   ]

const CrudAPIFetch = (de) => {
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
  )
}

export default CrudAPIFetch
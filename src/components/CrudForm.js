import React, { useEffect, useState } from 'react'

const initialForm = {
    name:"",
    album:"",
    id: null,
};

const CrudForm = ({createData,updateData,dataToEdit,setDataToEdit}) => {

    const [form, setForm] = useState(initialForm);


    const handleChange = (e) => {
      setForm({
        ...form,[e.target.name]: e.target.value,
      })

    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if(!form.name || !form.album){
        alert("Datos incompletos");
        return;
      }

      if (form.id == null)
      {
        createData(form);
      }else{
        updateData(form);
      }
      handleReset();
    };

    const handleReset = (e) => {
      setForm(initialForm);
      setDataToEdit(null);
    };

    useEffect(() => {

      if(dataToEdit){
        setForm(dataToEdit);
      }else{
        setForm(initialForm);
      }

    }, [dataToEdit])
    

  return (
    <div>
        <h3>Agregar</h3>
        <form onSubmit={handleSubmit} style={{paddingLeft:'1rem'}}>
            <input value={form.name} onChange={handleChange} type="text" name="name" placeholder='Nombre'/>
            <br/>
            <input value={form.album} onChange={handleChange} type="text" name="album" placeholder='Álbum'/>
            <br/>
            <input style={{marginRight:'0.5rem', marginTop:'0.5rem'}} type="submit" value="Enviar" />
            <input type="reset" value="Limpiar" onClick={handleReset}/>
        </form>
    </div>
  )
}

export default CrudForm
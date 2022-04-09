import React, { useEffect, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const axios = require('axios');
const controller = new AbortController();

const CrudAPIAxios = () => {
    
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  let url = "http://localhost:5000/music";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url,{
        signal: controller.signal
      })
      .then((res) => {
          setDb(res.data);
          setError(null);
        setLoading(false);
      })
        .catch((err) =>{
         setTimeout(() => {
            setLoading(false);
            setError(err);
            controller.abort();
            console.log(err);
        }, 5000);
         });
  }, [url]);

  const createData = (data) => {
    axios.post(url,data)
    .then((res) => {
        console.log(res);
        setDb([...db, res.data]);
        setError(null);
      setLoading(false);
    })
      .catch((err) =>{
       setTimeout(() => {
          setLoading(false);
          setError(err);
          controller.abort();
          console.log(err);
      }, 5000);
       });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    axios.put(endpoint, data)
    .then((res) => {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
        setError(null);
      setLoading(false);
    })
    .catch((err) =>{
       setTimeout(() => {
          setLoading(false);
          setError(err);
          controller.abort();
          console.log(err);
      }, 5000);
    });
}
    
  const deleteData = (id) => {
    let endpoint = `${url}/${id}`;
    let options = {
      headers: { "content-type": "application/json" },
    };
    let isDelete = window.confirm(
      `Estás seguro de eliminar el registro con el id: ${id}?`
    );

    if (isDelete) {
        axios.delete(endpoint,options)
        .then((res) => {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
            setError(null);
          setLoading(false);
        })
        .catch((err) =>{
           setTimeout(() => {
              setLoading(false);
              setError(err);
              controller.abort();
              console.log(err);
          }, 5000);
        });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2> CRUD API AXIOS</h2>
      <div className='Container-CRUD'>

      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && (
        <Message
          msg={`${error}`}
          bgColor="#dc3545"
        />
      )}
      {db && (
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
              
      </div>
    </div>
  );
};

export default CrudAPIAxios;

import CrudAPIAxios from "./components/CrudAPIAxios";
import CrudAPIFetch from "./components/CrudAPIFetch";
import CrudAppSinAPI from "./components/CrudAppSinAPI";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <CrudAppSinAPI/>
      <hr/>
      <CrudAPIFetch/>
      <hr/>
      <CrudAPIAxios/>
    </>
  );
}

export default App;

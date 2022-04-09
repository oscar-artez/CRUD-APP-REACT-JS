import CrudAPIFetch from "./components/CrudAPIFetch";
import CrudApp from "./components/CrudAppSinAPI";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <CrudAppSinAPI/>
      <hr/>
      <CrudAPIFetch/>
    </>
  );
}

export default App;

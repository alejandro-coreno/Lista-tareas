import Formulario from "./components/Formulario";
import ListaTareas from "./components/ListaTareas";

const App = () => {
  return (
    <div className="w-[55%] mx-auto my-10 h-auto flex flex-col gap-6 border border-blue-400 p-7 shadow-md rounded-md">
      <h1 className="text-3xl tracking-wide text-blue-700">Lista de Tareas</h1>
      <Formulario />
      <ListaTareas />
    </div>
  );
};

export default App;

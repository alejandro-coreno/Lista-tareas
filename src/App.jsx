import Formulario from "./components/Formulario";

const App = () => {
  return (
    <div className="w-1/2 mx-auto my-10 h-auto flex flex-col gap-6 border border-indigo-400 p-5 shadow-md rounded-md">
      <h1 className="text-3xl tracking-wide text-blue-700">Lista de Tareas</h1>
      <Formulario />
    </div>
  );
};

export default App;

import { useState } from "react";
import Formulario from "./assets/components/Formulario";

const App = () => {

  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: 'Estudiar para el examen',
    },

    {
      id: 2, 
      nombre: 'Aprender Firebase'
    }
    ,


    {
      id: 3, 
      nombre: 'Aprender Next JS'
    }
    
    ,

    {
      id: 4, 
      nombre: 'Aprender Vue'
    }
  ]);

  const agregarTarea = (tarea) =>{
    setTareas({...tareas, tarea });
  } 


  return (
    <Formulario tareas={tareas}/>
  );
};

export default App;

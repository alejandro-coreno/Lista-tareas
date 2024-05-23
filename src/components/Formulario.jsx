import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase/firebaseConfig";

const Formulario = ({ tareas }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleTarea = (e) => {
    e.preventDefault();
    console.log("Tarea ", nuevaTarea);
  };

  return (
    <form className="w-full border border-red-400 flex gap-3" onSubmit={handleTarea}>
      <input
        type="text"
        name="tarea"
        id="tarea"
        placeholder="Escribe una tarea"
        onChange={(e) => setNuevaTarea(e.target.value)}
        className="w-3/4 outline p-2"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Formulario;

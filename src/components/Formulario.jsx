import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase/firebaseConfig";
import Swal from "sweetalert2";

const Formulario = () => {
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleTarea = async (e) => {
    e.preventDefault();

    if (nuevaTarea.trim() === '') {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Agrege un tarea"
      });
      return;
    }
    try{
      await addDoc(collection(db, 'tareas'), {
        nombre: nuevaTarea
      });
      console.log('Tarea agregada correctamente');
    }
    catch ( error ){
      console.log( error.message );
    }

    setNuevaTarea('');
  };

  return (
    <form className="w-full flex gap-3" onSubmit={handleTarea}>
      <input
        type="text"
        name="tarea"
        id="tarea"
        value={nuevaTarea}
        placeholder="Escribe una tarea"
        onChange={(e) => setNuevaTarea(e.target.value)}
        className="w-3/4 outline-none p-2 border-b-2 border-blue-400 placeholder:italic placeholder:tracking-wide"
      />
      <button type="submit" className="p-2 w-3/12 bg-blue-400 rounded-md shadow-md text-white font-medium hover:bg-blue-600 duration-100 tracking-wide">Agregar</button>
    </form>
  );
};

export default Formulario;

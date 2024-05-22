import { useState } from "react";

const Formulario = ({ tareas }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleTarea = (e) => {
    e.preventDefault();
    console.log("Tarea ", nuevaTarea);
  };

  return (
    <form onSubmit={handleTarea}>
      <input
        type="text"
        name="tarea"
        id="tarea"
        placeholder="Escribe una tarea"
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button type="submit">Agregar</button>

      {tareas.length > 0 ? tareas.map((tarea) => <div key={tarea.id}>
        <span>{tarea.nombre}</span>
      </div>) : <h3>No hay tareas</h3>}
    </form>
  );
};

export default Formulario;

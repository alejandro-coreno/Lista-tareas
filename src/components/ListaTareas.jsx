import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import Tarea from "./Tarea,";

const ListaTareas = () => {

    const [tareas, setTareas] = useState([]);

    useEffect(() => {

        onSnapshot(collection(db, 'tareas'), (doc) => {
            const arregloTareas = doc.docs.map((documento) => {
                const data = documento.data();
                return {
                    id: documento.id,
                    nombre: data.nombre
                }
            });
            setTareas( arregloTareas );
        }); 

    }, []);

    return (
        <div className="w-full flex flex-col gap-3">

            {
                tareas.length > 0 ? tareas.map((tarea) => (
                    <Tarea key={tarea.id} nombre={ tarea.nombre } id={tarea.id}/>
                ))
                :
                <h1 className="text-blue-600 text-center text-xl tracking-wider">No hay tareas</h1>
            }

        </div>
    );
};

export default ListaTareas;

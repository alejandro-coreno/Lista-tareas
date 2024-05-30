import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";

const Tarea = () => {

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

    console.log( tareas );


    return (
        <div className="w-full flex flex-col gap-3">

            {
                tareas.length > 0 ? tareas.map((tarea) => (
                    <div key={tarea.id} className="border border-indigo-200 p-2 rounded-md  shadow-sm">
                            <h3 className="font-medium tracking-wide text-indigo-600">{ tarea.nombre }</h3>
                    </div>
                ))
                :
                <h1 className="text-blue-600 text-center text-xl tracking-wider">No hay tareas</h1>
            }

        </div>
    );
};

export default Tarea;

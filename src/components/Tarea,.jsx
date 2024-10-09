import { useState } from "react";
import { doc , deleteDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";
import iconBote from "../assets/img/icon_bote.png";
import iconEdit from "../assets/img/icon-edit.png"

const Tarea = ({ nombre , id}) => {

    const [actulizar , setActualizar] = useState(true);
    const [actualizarTarea, setActualizarTarea] = useState(nombre);

    const deleteTarea = async (uid) => {

        try{
            await deleteDoc(doc(db, 'tareas', uid));
        }
        catch( error ){
            console.log( error.message );
        }
    }

    const updateTarea = async (e) => {
        e.preventDefault();
        try {
            await updateDoc(doc(db, 'tareas', id),{
                nombre: actualizarTarea
            })
        }
        catch( error ){
            console.log( error );
        }

        const Toast = await Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          });
        setActualizar(true);
    }

    return ( 
        <div className="border border-indigo-200 p-3 rounded-md  shadow-sm w-full flex justify-between hover:bg-gray-100 group duration-100">
            {
                actulizar ? 
                <>
                    <h3 className="font-medium tracking-wide text-blue-500">{ nombre }</h3>
                    <div className="flex gap-3">
                        <img onClick={() => setActualizar(!actulizar)}  src={iconEdit} alt="edit" className="opacity-0 group-hover:opacity-100 cursor-pointer" 
                        />
                        <img onClick={ () => deleteTarea(id)} src={iconBote} alt="bote" className="opacity-0 group-hover:opacity-50 cursor-pointer"/>
                    </div>
                </>

                :
                <>
                    <form action="" className="w-full flex gap-2" onSubmit={updateTarea}>
                         <input 
                            className="w-[65%] p-2 border border-indigo-400 rounded-sm"
                            type="text" 
                            name="actualizar" 
                            id="actualizar" 
                            value={ actualizarTarea } 
                            onChange={(e) => setActualizarTarea(e.target.value)}  
                         
                        />

                        <div className="w-[35%] flex gap-2">
                            <button type="submit" className="w-1/2 rounded-md bg-blue-500 font-medium p-2 text-white">Actualizar</button>
                            <button className="w-1/2 rounded-md bg-red-400 font-medium p-2 text-white" onClick={() => setActualizar(!actulizar)}>Cerrar</button>
                        </div>
                    </form>
                </>
            }
        </div>
    )
}

export default Tarea;
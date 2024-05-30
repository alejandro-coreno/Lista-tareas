import { doc , deleteDoc} from "firebase/firestore"
import { db } from "../firebase/firebaseConfig";
import iconBote from "../assets/img/icon_bote.png";

const Tarea = ({ nombre , id}) => {

    const deleteTarea = async (uid) => {

        try{
            await deleteDoc(doc(db, 'tareas', uid));
        }
        catch( error ){
            console.log( error.message );
        }
    }

    return ( 
        <div className="border border-indigo-200 p-2 rounded-md  shadow-sm w-full flex justify-between hover:bg-gray-100 group">
            <h3 className="font-medium tracking-wide text-blue-500">{ nombre }</h3>
            <img onClick={ () => deleteTarea(id)} src={iconBote} alt="bote" className="opacity-0 group-hover:opacity-50 mx-2 cursor-pointer"/>
        </div>
    )
}

export default Tarea;
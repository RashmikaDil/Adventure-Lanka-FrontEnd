import {  faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;




function CommentCard({id,uid}){
 

    const handleDeleteComent = async () => {
        try {
          const response = await axios.delete(`${apiUrl}api/c_model/${id._id}`);
          console.log(response);
        }catch(error){
          console.log(error);
        }
      }

    
    return (
    <>
 
    
                  <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100">
               <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </div>
                  <div className="ml-4 w-full">
                    <div className="float-right"> {id.uid === uid &&  <FontAwesomeIcon className="cursor-pointer" onClick={handleDeleteComent} icon={faTrash}></FontAwesomeIcon>}</div>
                    <div className="text-sm font-medium text-gray-900">{id.name}</div>
                    <p className="mt-1 text-sm text-gray-600">{id.content}</p>
                  </div>
    
    </>

    );

}

export default CommentCard;
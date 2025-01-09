import { faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

function CommentCard({ id, uid }) {
  const handleDeleteComment = async () => {
    try {
      const response = await axios.delete(`${apiUrl}api/c_model/${id._id}`);
      console.log("Comment deleted:", response);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="flex items-start bg-white p-4 rounded-md shadow-xl border-[1px]  w-full">
 
      <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-200">
        <FontAwesomeIcon icon={faUser} className="text-gray-500" />
      </div>

 
      <div className="ml-4 w-full">
    
        {id.uid === uid && (
          <div className="float-right">
            <FontAwesomeIcon
              icon={faTrash}
              className="cursor-pointer text-red-500 hover:text-red-700"
              onClick={handleDeleteComment}
            />
          </div>
        )}

    
        <div className="text-sm font-medium text-gray-900">{id.name}</div>

   
        <p className="mt-1 text-sm text-gray-600">{id.content}</p>
      </div>
    </div>
  );
}

export default CommentCard;

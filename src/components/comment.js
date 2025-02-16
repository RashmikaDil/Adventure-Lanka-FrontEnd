import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

function CommentCard({ id, uid , pId }) {
  
  const deleteComment = async () => {
    const token = localStorage.getItem('token');
    try{
      const response = await axios.delete(`${apiUrl}api/destinations/${pId}/comments/${id._id}` ,  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Comment deleted:", response);
    }catch(err){

      console.error("Error deleting comment:", err);
      alert("Failed to delete comment");

    }
  }

  return (
   
    <>

<div className="grid mt-2 grid-rows-2 grid-cols-8 w-full h-24 bg-white shadow-md rounded-md border border-gray-200">

  <div className="p-2 row-span-2 col-span-1  flex justify-center items-center">
    <FontAwesomeIcon icon={faUser} />
  </div>

  <div className="pt-2 col-span-4 font-bold text-m">{id.name}</div>

  
  <div className="pt-2 col-span-3 text-xs">{new Intl.DateTimeFormat("en-US", { 
      year: "numeric", 
      month: "long", 
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"  
  }).format(new Date(id.createdAt))} </div>

  <div className=" row-span-2  col-span-5 ">{id.content}</div>


  <button className={` m-1 row-span-1 col-span-2 text-red-500  rounded-md hover:text-red-700 hover:font-semibold  transition ${id.uid === uid ? "inline-block":"hidden"}`} onClick={deleteComment}>
    Delete
  </button>
</div>

    </>
  );
}

export default CommentCard;

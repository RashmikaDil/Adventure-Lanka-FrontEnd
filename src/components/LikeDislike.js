import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

function LikeDislike({ destination }) {
    const [likes, setLikes] = useState(destination.likes.length || 0);
  const [dislikes, setDislikes] = useState(destination.dislikes.length || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;


  

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const response = await axios.get(`${apiUrl}api/auth/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });


       
        const userId = response.data._id;
        setIsLiked(destination.likes.includes(userId));
        setIsDisliked(destination.dislikes.includes(userId));
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [destination.likes, destination.dislikes ,apiUrl]);

  const likeDestination = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await axios.post(
        `${apiUrl}api/destinations/${destination._id}/like`,
        { toggle: isLiked }, // Pass a toggle flag to clear the like
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLikes(response.data.likesCount);
      setDislikes(response.data.dislikesCount);

      // Toggle the like status
      setIsLiked(!isLiked);
      setIsDisliked(false)
      if (isLiked) {setIsDisliked(false);} // Clear dislike if currently active
    } catch (error) {
      console.error('Error liking destination:', error);
    }
  };

  const dislikeDestination = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await axios.post(
        `${apiUrl}api/destinations/${destination._id}/dislike`,
        { toggle: isDisliked }, 
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLikes(response.data.likesCount);
      setDislikes(response.data.dislikesCount);

      // Toggle 
      setIsDisliked(!isDisliked);
      setIsLiked(false);
      if (isDisliked){
        setIsLiked(false);
      } // Clear like 
    } catch (error) {
      console.error('Error disliking destination:', error);
    }
  };
return(<>

<div className="flex">
 <div className={`p-1 `}>
              <FontAwesomeIcon
                icon={faThumbsUp}
                onClick={likeDestination}
                className={`ml-1 mr-1 cursor-pointer  ${isLiked ? 'text-blue-700' : ''}`}
              />
              {likes}
            </div>
            <div  className="p-1"> 
              <FontAwesomeIcon
                icon={faThumbsDown}
                onClick={dislikeDestination}
                className={`ml-1 mr-1 cursor-pointer  ${isDisliked ? 'text-red-700' : ''}`}
              />
              {dislikes}
            </div>
            </div>
</>)
  


}

export default LikeDislike;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsDown, faThumbsUp, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';


const DestinationCard = ({ destination }) => {
 
  const [likes, setLikes] = useState(destination.likes.length || 0);
  const [dislikes, setDislikes] = useState(destination.dislikes.length || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;


  const navigate = useNavigate();

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


        // Check if the user has already liked or disliked this destination
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
        { toggle: isDisliked }, // Pass a toggle flag to clear the dislike
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLikes(response.data.likesCount);
      setDislikes(response.data.dislikesCount);

      // Toggle the dislike status
      setIsDisliked(!isDisliked);
      setIsLiked(false);
      if (isDisliked){
        setIsLiked(false);
      } // Clear like if currently active
    } catch (error) {
      console.error('Error disliking destination:', error);
    }
  };

  const r = likes + dislikes > 0 ? (likes / (likes + dislikes)) * 5 : 0;
  const ratings = Number(r.toFixed(1));
  const points = likes + (likes - dislikes);

  const handleNavigation = (destinationId) => {
    navigate('/destination', { state: destinationId  });
  };

  return (
    <div
      style={{ backgroundImage: `url(${destination.imag})` }}
      className="overflow-hidden bg-cover bg-center w-[200px] h-[300px] bg-red-200 m-2 shadow-xl rounded-2xl"
    >
      <div className="flex rounded-2xl w-full h-1/3 p-2 bg-gradient-to-b from-black to-transparent">
        <div className="p-1 rounded-xl bg-white w-14 h-5 text-xs flex justify-center items-center bg-opacity-35 text-white font-bold">
          <FontAwesomeIcon icon={faStar} /> {ratings}
        </div>
        <div className="p-1 rounded-xl bg-white w-14 h-5 ml-2 text-xs flex justify-center items-center bg-opacity-35 text-white font-bold">
          <FontAwesomeIcon icon={faTrophy} /> {points}
        </div>
      </div>
      <div className="flex relative text-white h-2/3 bg-gradient-to-t from-black to-transparent p-4 rounded-xl">
        <div>
          <h1
            onClick={() => handleNavigation(destination._id)}
            className="absolute bottom-14 text-md font-bold cursor-pointer"
          >
            {destination.name}
          </h1>
          <h1 className="absolute bottom-8 text-sm">{destination.location}</h1>
          <div className="absolute right-5 bottom-2 flex">
            <div>
              <FontAwesomeIcon
                icon={faThumbsUp}
                onClick={likeDestination}
                className={`ml-2 mr-1 cursor-pointer ${isLiked ? 'text-blue-700' : ''}`}
              />
              {likes}
            </div>
            <div>
              <FontAwesomeIcon
                icon={faThumbsDown}
                onClick={dislikeDestination}
                className={`ml-2 mr-1 cursor-pointer ${isDisliked ? 'text-red-700' : ''}`}
              />
              {dislikes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

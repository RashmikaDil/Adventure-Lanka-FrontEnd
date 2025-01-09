import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,  faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import LikeDislike from './LikeDislike';


const DestinationCard = ({ destination }) => {
 
  const likes = destination.likes.length || 0;
  const dislikes = destination.dislikes.length || 0;

  const navigate = useNavigate();


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
            className="absolute bottom-8 text-md font-bold cursor-pointer"
          >
            {destination.name}
          </h1>
          
          <div className="absolute right-5 bottom-2 flex ">
            <LikeDislike destination={destination}></LikeDislike>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

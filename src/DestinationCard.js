import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsDown, faThumbsUp, faTrophy } from '@fortawesome/free-solid-svg-icons';

const DestinationCard = ({ destination }) => {
    
    const [likes, setLikes] = useState(destination.likes.length);
    const [dislikes, setDislikes] = useState(destination.dislikes.length);
    const [isLiked, setIsLiked] = useState(destination.likes.includes(destination.userId));  // Assuming userId is part of the destination object
    const [isDisliked, setIsDisliked] = useState(destination.dislikes.includes(destination.userId));

    

    const likeDestination = async () => {
        try {
            const response = await axios.post(`http://localhost:3002/api/destinations/${destination._id}/like`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`    
                }
            });

            setLikes(response.data.likesCount);
            setDislikes(response.data.dislikesCount);
            setIsLiked(!isLiked);
            setIsDisliked(false); 
        } catch (error) {
            console.error('Error liking destination:', error);
        }
    };

    const dislikeDestination = async () => {
        try {
            const response = await axios.post(`http://localhost:3002/api/destinations/${destination._id}/dislike`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` 
                }
            });

            setLikes(response.data.likesCount);
            setDislikes(response.data.dislikesCount);
            setIsDisliked(!isDisliked);
            setIsLiked(false); 
        } catch (error) {
            console.error('Error disliking destination:', error);
        }
        
    };

    const r = Number(likes / (likes + dislikes) * 5);
    let ratings = Number(r.toFixed(1));
    let points = (likes + (likes - dislikes));
    

    return (<>       
    
            <div style={{backgroundImage: `url(${destination.imag})`}} className={` overflow-hidden bg-cover bg-center  w-[200px] h-[300px] bg-red-200 m-2 shadow-xl rounded-2xl `} >
                 <div className=' flex rounded-2xl w-full h-1/3 p-2 bg-gradient-to-b from-black to-transparent '>
                 <div className='p-1 rounded-xl   bg-white w-14 h-5 text-xs flex justify-center items-center bg-opacity-35 text-white font-bold' >
                    <FontAwesomeIcon  icon={faStar}></FontAwesomeIcon>{ratings}
                </div>
                <div className='p-1 rounded-xl  bg-white w-14 h-5 ml-2 text-xs flex justify-center items-center bg-opacity-35 text-white font-bold' >
                    <FontAwesomeIcon  icon={faTrophy}></FontAwesomeIcon > {points}
                </div>
                 </div>
                 <div className='flex relative text-white  h-2/3 bg-gradient-to-t from-black to-transparent p-4 rounded-xl  '>
                 
                 <div className=''>
                 <h1 className='absolute bottom-10 text-md font-bold '>{destination.name} </h1>
                 <h1 className='absolute bottom-2 text-sm  '>{destination.location} </h1>
                 </div>
                 <div className='absolute right-5 bottom-2 flex '>
                    
                    <div>
                    <FontAwesomeIcon icon={faThumbsUp}    
                    onClick={likeDestination} 
                    disabled={isLiked} 
                    className={` ml-2 mr-1 ${isLiked ?   "text-blue-700": "" }`}>
                    </FontAwesomeIcon>
                    {likes}
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faThumbsDown}
                         onClick={dislikeDestination} 
                         disabled={isDisliked}
                         className={`ml-2 mr-1 ${isDisliked ? "text-red-700":""} `}

                    
                    ></FontAwesomeIcon>
                    {dislikes}
                    </div>
                    </div> 
                    </div>
                 
            </div>


    




    
    
    
   
        
        </>
 );
};

export default DestinationCard;

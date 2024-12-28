import React, { useState } from 'react';
import axios from 'axios';

const DestinationCard = ({ destination }) => {
    const [likes, setLikes] = useState(destination.likes.length);
    const [dislikes, setDislikes] = useState(destination.dislikes.length);
    const [isLiked, setIsLiked] = useState(destination.likes.includes(destination.userId));  // Assuming userId is part of the destination object
    const [isDisliked, setIsDisliked] = useState(destination.dislikes.includes(destination.userId));

    const likeDestination = async () => {
        try {
            const response = await axios.post(`http://localhost:3002/api/destinations/${destination._id}/like`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` // Replace with your actual token storage
                }
            });

            setLikes(response.data.likesCount);
            setDislikes(response.data.dislikesCount);
            setIsLiked(!isLiked);
            setIsDisliked(false); // Reset dislike if already disliked
        } catch (error) {
            console.error('Error liking destination:', error);
        }
    };

    const dislikeDestination = async () => {
        try {
            const response = await axios.post(`http://localhost:3002/api/destinations/${destination._id}/dislike`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` // Replace with your actual token storage
                }
            });

            setLikes(response.data.likesCount);
            setDislikes(response.data.dislikesCount);
            setIsDisliked(!isDisliked);
            setIsLiked(false); // Reset like if already liked
        } catch (error) {
            console.error('Error disliking destination:', error);
        }
    };

    return (
        <div className="destination-card">
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <img src={destination.imag} alt={destination.name} />
            <div>
                <button 
                    onClick={likeDestination} 
                    disabled={isLiked}
                    className={`like-btn ${isLiked ? 'liked' : ''}`}
                >
                    {isLiked ? 'Liked' : 'Like'} ({likes})
                </button>
                <button 
                    onClick={dislikeDestination} 
                    disabled={isDisliked}
                    className={`dislike-btn ${isDisliked ? 'disliked' : ''}`}
                >
                    {isDisliked ? 'Disliked' : 'Dislike'} ({dislikes})
                </button>
            </div>
        </div>
    );
};

export default DestinationCard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DestinationCard from './DestinationCard';

const DestinationsList = () => {
    const [destinations, setDestinations] = useState([]);
    
    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await axios.get('http://localhost:3002/api/destinations');
                setDestinations(response.data);  
            } catch (error) {
                console.error('Error fetching destinations:', error);
            }
        };

        fetchDestinations();
    }, []);
    


useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/api/destinations"
        );

        // Calculate points for each destination
        const updatedDestinations = response.data.map((destination) => ({
          ...destination,
          points: destination.likes?.length + (destination.likes?.length - destination.dislikes?.length || 0),
        }));

        setDestinations(updatedDestinations);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);

  // Sort destinations by points in descending order
  const topDestinations = [...destinations]
    .sort((a, b) => b.points - a.points)
    .slice(0, 5);
    return (
        <div>
            <div className="flex flex-wrap  ">
                {topDestinations.map(destination => (
                    <DestinationCard key={destination._id} destination={destination} />
                ))}
            </div>
        </div>
    );
};

export default DestinationsList;

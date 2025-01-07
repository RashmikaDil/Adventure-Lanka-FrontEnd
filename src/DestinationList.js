import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DestinationCard from './components/DestinationCard';
 
const DestinationsList = ( {set}) => {
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

       //Cal points
        const updatedDestinations = response.data.map((destination) => ({
          ...destination,
          points: destination.likes?.length  + (destination.likes?.length - destination.dislikes?.length  || 0),
        }));

        setDestinations(updatedDestinations);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);
  const topDestinations = [...destinations]
  .sort((a, b) => b.points - a.points)
  .slice(0, 5);

  if (set==='top5'){
    return (
      <div>
          <div className="flex flex-wrap p-4 pl-10 pr-10 justify-center bg-white ">
              {topDestinations.map(destination => (
                  <DestinationCard key={destination._id} destination={destination} />
              ))}
          </div>
      </div>
  );
  }else{
    return (
      <div>
          <div className="flex flex-wrap p-10  ">
              {destinations.map(destination => (
                  <DestinationCard key={destination._id} destination={destination} />
              ))}
          </div>
      </div>
    )
  }

    
};

export default DestinationsList;

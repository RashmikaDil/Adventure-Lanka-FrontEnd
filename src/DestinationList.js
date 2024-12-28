import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DestinationCard from './DestinationCard';

const DestinationsList = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await axios.get('http://localhost:3002/api/destinations');
                setDestinations(response.data);  // assuming the response returns a list of destinations
            } catch (error) {
                console.error('Error fetching destinations:', error);
            }
        };

        fetchDestinations();
    }, []);

    return (
        <div>
            <h1>Destinations</h1>
            <div className="destination-list">
                {destinations.map(destination => (
                    <DestinationCard key={destination._id} destination={destination} />
                ))}
            </div>
        </div>
    );
};

export default DestinationsList;

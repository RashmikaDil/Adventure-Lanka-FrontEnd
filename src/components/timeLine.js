import axios from "axios";
import React, { useEffect, useState } from "react";


const BestTimeTimeline = ({ pid }) => {
  const [destination, setDestination] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}api/destinations`);
        const filterById = response.data.find((destination) => destination._id === pid);

        if (filterById) {
          setDestination(filterById.visitTimeline || []); 
        } else {
          setError("Destination not found.");
        }
      } catch (error) {
        setError("Error fetching destination data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (pid) {
      fetchDestination();
    }
  }, [pid,apiUrl]);

  return (
    <div className="p-6">
      {loading && <p className="text-center text-gray-700">Loading destination data...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6 mt-8">
        {destination.map((values, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-300 rounded-lg shadow-md p-6 w-full md:w-1/5"
          >
            {index !== destination.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-full h-1 w-6 bg-gray-800"></div>
            )}
            <h3 className="text-lg font-bold text-gray-900">{values.period}</h3>
            <p className="text-gray-700 mt-2">{values.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestTimeTimeline;

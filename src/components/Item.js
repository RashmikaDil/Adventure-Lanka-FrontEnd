import axios from "axios";
import { useEffect, useState } from "react";
import LikeDislike from "./LikeDislike";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";


const Item = ({ category, num }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const handleNavigation = (destination) => {
    navigate(`./${destination}`);
  };

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(`${apiUrl}api/destinations`);
        setDestinations(response.data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, [apiUrl]);

  const calculatePoints = (dest) => {
    const likes = dest.likes.length;
    const dislikes = dest.dislikes.length;
    return likes + (likes - dislikes);
  };

  let filteredDestinations = [];

  if (category === "any") {
    filteredDestinations = destinations
      .map((dest) => {
        const points = calculatePoints(dest);
        return { ...dest, points };
      })
      .sort((a, b) => b.points - a.points)
      .slice(0, num);
  } else {
    filteredDestinations = destinations
      .filter((dest) => dest.category === category)
      .map((dest) => {
        const points = calculatePoints(dest);
        return { ...dest, points };
      })
      .sort((a, b) => b.points - a.points)
      .slice(0, num);
  }

  return (
    <>
      <div className="p-4 text-center text-3xl font-bold text-gray-900">
        <h1 className="underline decoration-blue-500 decoration-4">
          {category === "any" ? "Top Destinations" : `Best in ${category}`}
        </h1>
      </div>

      {loading ? (
        <div className="text-center">Loading destinations...</div>
      ) : filteredDestinations.length === 0 ? (
        <div className="text-center">No destinations found in this category.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
          {filteredDestinations.map((dest, index) => {
            const likes = dest.likes.length;
            const dislikes = dest.dislikes.length;
            const r = likes + dislikes > 0 ? (likes / (likes + dislikes)) * 5 : 0;
            const ratings = Number(r.toFixed(1));

            return (
              <div
                key={index}
                className="relative flex flex-col bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex rounded-2xl w-full h-1/3 p-2 fixed bg-gradient-to-b from-black to-transparent">
                  <div className="p-1 rounded-xl bg-white w-14 h-5 text-xs flex justify-center items-center bg-opacity-35 text-white font-bold">
                    <FontAwesomeIcon icon={faStar} /> {ratings}
                  </div>
                  <div className="p-1 rounded-xl bg-white w-14 h-5 ml-2 text-xs flex justify-center items-center bg-opacity-35 text-white font-bold">
                    <FontAwesomeIcon icon={faTrophy} /> {dest.points}
                  </div>
                </div>
                <div
                  className="h-48 bg-cover bg-center cursor-pointer"
                  onClick={() => handleNavigation(dest._id)}
                  style={{
                    backgroundImage: `url(${dest.imag || "https://via.placeholder.com/300"})`,
                  }}
                ></div>
                <div
                  className="p-4 flex-1 flex flex-col justify-between"
                  
                >
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 cursor-pointer" onClick={() => handleNavigation(dest._id)}>
                    {dest.name}
                  </h2>
                  <h3 className="text-xs mb-4 font-semibold">
                   <FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon> {dest.location}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {dest.description || "Discover the beauty of this destination."}
                  </p>
                    
                      
             



                  <div className="flex justify-between items-center mt-auto">
                    <LikeDislike destination={dest} />
                    <span className="text-xs text-gray-500">{dest.category}</span>
                  </div>
                 
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Item;

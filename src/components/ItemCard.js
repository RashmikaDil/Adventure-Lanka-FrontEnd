import LikeDislike from "./LikeDislike";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";

const ItemCard = ({ destination, num }) => {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/destination/${id}`);
  };

  const filteredDestinations = (destination || [])
    .sort((a, b) => b.points - a.points)
    .slice(0, num);

  return (
    <>
      {filteredDestinations.length === 0 ? (
        <div className="text-center text-gray-900">Nothing to see!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
          {filteredDestinations.map((dest, index) => {
            const likes = dest.likes.length;
            const dislikes = dest.dislikes.length;
            const r = likes + dislikes > 0 ? (likes / (likes + dislikes)) * 5 : 0;
            const ratings = Number(r.toFixed(1));
            const points = likes + (likes - dislikes);

            return (
              <div
                key={index}
                className="relative flex flex-col bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex rounded-2xl w-full h-1/4 p-2 fixed bg-gradient-to-b from-black to-transparent">
                  <div className="p-1 rounded-xl bg-white w-14 h-5 text-xs flex justify-center items-center bg-opacity-35 text-white font-bold">
                    <FontAwesomeIcon icon={faStar} /> {ratings}
                  </div>
                  <div className="p-1 rounded-xl bg-white w-14 h-5 ml-2 text-xs flex justify-center items-center bg-opacity-35 text-white font-bold">
                    <FontAwesomeIcon icon={faTrophy} /> {points}
                  </div>
                </div>
                <div
                  className="h-48 bg-cover bg-center cursor-pointer"
                  onClick={() => handleNavigation(dest._id)}
                  style={{
                    backgroundImage: `url(${dest.imag || "https://via.placeholder.com/300"})`,
                  }}
                  aria-label={`View details for ${dest.name}`}
                ></div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h2
                    className="text-lg font-semibold text-gray-900 mb-2 cursor-pointer"
                    onClick={() => handleNavigation(dest._id)}
                  >
                    {dest.name}
                  </h2>
                  <h3 className="text-xs mb-4 font-semibold">
                    <FontAwesomeIcon icon={faMapLocation} /> {dest.location}
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

export default ItemCard;

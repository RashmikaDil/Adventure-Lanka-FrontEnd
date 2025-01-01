import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour,  faLocationDot, faMapLocation, faMoneyBill1Wave, faStar, faTable, faTrophy } from "@fortawesome/free-solid-svg-icons";

function DestinationView() {
  const location = useLocation();
  const { state: destinationId } = location; 
  const [destination, setDestination] = useState(null); 
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/destinations');
        const filterById = response.data.find(destinations => destinations._id === destinationId); 
        setDestination(filterById);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch destination data.');
      }
    };

    if (destinationId) { 
      fetchDestination();
    }
  }, [destinationId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!destination) {
    return <p>Loading...</p>;
    
  }
const setLikes = destination.likes?.length;
const setDislikes = destination.dislikes?.length;
const points = setLikes + (setLikes - setDislikes);
const rating = setLikes /( setLikes + setDislikes)*5;
  return (
    <>
      <Header f="view" />
      <div className=" p-12 bg-[#80cefc] text-[#02476e]" 
      >
         <div className="flex justify-between">
        <div>
        <h2 className="text-3xl font-bold">{destination.name} </h2>
        
        <p><FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon> {destination.district   }</p>
        <div className="w-32 flex justify-between ">
        <p className=""><FontAwesomeIcon icon={faStar} className="mr-2"></FontAwesomeIcon >{rating}</p>
        <p><FontAwesomeIcon icon={faTrophy} className="mr-2"></FontAwesomeIcon >{points}</p>
        </div>
       
        </div>
        
        </div>
        <div className="md:flex  mt-10 ">
            <img src={destination.imag} alt=" " className="md:w-1/2 w-full  md:rounded-l-2xl  h-[50vb]"></img>
            <div className="p-10 md:w-1/2 w-full bg-[#02476e] text-[#80cefc] md:rounded-r-xl">
            <table>
                <tr>
                    <td><FontAwesomeIcon icon={faTable}></FontAwesomeIcon></td>
                    <td className="p-2 font-bold">Category : </td>
                    <td className="p-2">{destination.category}</td>
                </tr>
                <tr>
                <td><FontAwesomeIcon icon={faMoneyBill1Wave}></FontAwesomeIcon></td>
                    <td className="p-2 font-bold">Cost : </td>
                    <td className="p-2">{destination.cost}</td>
                </tr>
                <tr>
                <td><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></td>
                    <td className="p-2 font-bold">Location : </td>
                    <td className="p-2">{destination.location}</td>
                </tr>
                <tr>
                <td><FontAwesomeIcon icon={faClockFour}></FontAwesomeIcon></td>
                    <td className="p-2 font-bold">Duration : </td>
                    <td className="p-2">{destination.Duration}</td>
                </tr>


                
            </table>
               
            </div>
        </div>
        <div className="p-8 ">
            <h1 className="text-3xl font-bold mb-10">Description</h1>
        <p className="text-justify" >{destination.description}</p>
        </div>
      </div>
    </>
  );
}

export default DestinationView;

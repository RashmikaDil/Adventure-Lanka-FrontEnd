import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour, faLocationDot, faMapLocation, faMoneyBill1Wave, faStar, faTable, faTrophy } from "@fortawesome/free-solid-svg-icons";
import CommentForm from "./components/commentForm";
import CommentCard from "./components/comment";
import Timeline from "./components/timeLine";
import LikeDislike from "./components/LikeDislike";

function DestinationView() {

  const [comments, setComments] = useState([]);
  const location = useLocation();
  const { state: destinationId } = location;
  const [destination, setDestination] = useState(null);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null); 
 


  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/api/c_model`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchComments();
  }, );

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/destinations');
        const filterById = response.data.find(destination => destination._id === destinationId);
        setDestination(filterById);
      } catch (error) {
        console.error('Error fetching destination data:', error);
        setError('Failed to fetch destination data.');
      }
    };

    if (destinationId) {
      fetchDestination();
    }
  }, [destinationId]);
  
  // Fetch user  data
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:3002/api/auth/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!destination || !profile) {
    return <p>Loading...</p>;
  }

  const uid = profile._id;
  const name = profile.name;

  const Likes = destination.likes?.length || 0;
  const Dislikes = destination.dislikes?.length || 0;
  const points = Likes + (Likes - Dislikes);
  const rating = (Likes / (Likes + Dislikes) * 5 ).toFixed(1);
  const filterComments = comments.filter(comment => comment.pId === destinationId );

  


  return (
    <>
      <Header f="view" />
      <div className="p-12 bg-white text-[#02476e]">
        <div className="flex justify-between">
          <div>
            <h2 className="text-3xl font-bold">{destination.name}</h2>
            <p><FontAwesomeIcon icon={faMapLocation} /> {destination.district}</p>
            <div className="w-32 flex justify-between">
              <p><FontAwesomeIcon icon={faStar} className="mr-2" /> {rating}</p>
              <p><FontAwesomeIcon icon={faTrophy} className="mr-2" /> {points}</p>
              
            </div>
          </div>
          <div>
          <LikeDislike destination={destination}></LikeDislike>
            
            </div>
        </div>
        
        <div className="md:flex mt-10">
          <img src={destination.imag} alt={destination.name} className="md:w-1/2 w-full md:rounded-l-2xl h-[50vb]" />
          <div className="p-10 md:w-1/2 w-full bg-[#02476e] text-[#80cefc] md:rounded-r-xl">
            <table>
              <tbody>
                <tr>
                  <td><FontAwesomeIcon icon={faTable} /></td>
                  <td className="p-2 font-bold">Category:</td>
                  <td className="p-2">{destination.category}</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faMoneyBill1Wave} /></td>
                  <td className="p-2 font-bold">Cost:</td>
                  <td className="p-2">{destination.cost}</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faLocationDot} /></td>
                  <td className="p-2 font-bold">Location:</td>
                  <td className="p-2">{destination.location}</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faClockFour} /></td>
                  <td className="p-2 font-bold">Duration:</td>
                  <td className="p-2">{destination.Duration}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-8">
          <Timeline pid={destinationId}></Timeline>
          <h1 className="text-3xl font-bold mb-10 ">Description</h1>
          <p className="text-justify">{destination.description}</p>

          <div className=" p-5 md:flex  w-full bg-[#b8e5ff] mt-10">
            <div className="w-full md:w-1/2">
              <CommentForm pId={destinationId} uid={uid} name={name} />
            </div>
            <div className="p-5 w-full md:w-1/2" >
              {filterComments.map((_id,index) => (
                <> 
                  <div key={index} className="flex items-center my-4">
                    <CommentCard id={_id} uid={uid}></CommentCard>
                  </div>
                 
                </> 
              ))}
            </div>  
            
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationView;

import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLocationDot, faMapLocation, faMoneyBill1Wave, faStar, faTable, faTrophy } from "@fortawesome/free-solid-svg-icons";
import CommentForm from "./components/commentForm";
import CommentCard from "./components/comment";
import Timeline from "./components/timeLine";
import LikeDislike from "./components/LikeDislike";
import GoodBad from "./components/GoodBad";
import BarChart from "./components/BarChart";
import WeatherWidget from "./components/Weather";
import MapCard from "./components/MapCard";
import Item from "./components/Item";
import Footer from './components/footer';


function DestinationView() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [comments, setComments] = useState([]);
  const { destinationId } = useParams();
  const [destination, setDestination] = useState(null);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null); 



    const fetchComments = async () => {
      try {
        const response = await axios.get(`${apiUrl}api/c_model`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchComments();
  

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await axios.get(`${apiUrl}api/destinations`);
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
  }, [destinationId,apiUrl]);
  
  // Fetch user  data
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`${apiUrl}api/auth/profile`, {
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
  }, [apiUrl]);

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
      <Header f="view" className="z-10" />
      <div className="md:p-12 bg-white text-gray-900">
        <div className="flex justify-between md:m-0 m-8 ">
          <div className="">
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
          <img src={destination.imag} alt={destination.name} className="md:w-1/2 w-full md:rounded-l-2xl  object-cover object-center h-[50vb]" />
          <div className="p-10 md:w-1/2 w-full bg-gray-900 text-gray-400 md:rounded-r-xl">
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
                  <td><FontAwesomeIcon icon={faLocationDot} /></td>
                  <td className="p-2 font-bold">District:</td>
                  <td className="p-2">{destination.district}</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faStar} /></td>
                  <td className="p-2 font-bold">Tourist satisfaction: </td>
                  <td className="p-2">
                    
                  {rating === undefined && "Undefined"}
                  {rating >= 0 && rating < 2 && <h1 className="font-bold w-20 text-white rounded-xl flex items-center justify-center bg-red-700">Very Poor</h1>}
                  {rating >= 2 && rating < 3 && <h1 className="font-bold w-20 text-white rounded-xl flex items-center justify-center bg-yellow-500"> Poor</h1>}
                  {rating >= 3 && rating < 4 && <h1 className="font-bold w-20 text-white rounded-xl flex items-center justify-center bg-blue-600"> Good</h1>}
                  {rating >= 4 && rating < 5 && <h1 className="font-bold w-20 text-white rounded-xl flex items-center justify-center bg-green-600"> Very Good</h1>}
                  {rating  >=5 && <h1 className="font-bold w-20 text-white rounded-xl flex items-center justify-center bg-pink-600"> Excellent</h1>}
                    
                      </td>
                </tr>
              
              </tbody>
            </table>
            
          </div>
        </div>
        <div className="p-8">
          

        <h1 className="text-3xl font-bold mb-10 ">Description</h1>
          <p className="text-justify">{destination.description}</p>
          <h1 className="text-3xl font-bold mb-10 mt-5">Gallery</h1>
          <div className="flex flex-wrap w-full">
  {destination.images.map((url) => (
    <div className="md:w-1/3 w-full p-1" key={url}>
      <img
        src={url}
        alt={destination.name}
        className="transition-all cursor-pointer scale-1 hover:scale-[1.1] w-full h-[30vb] object-cover object-center"
      />
    </div>
  ))}
</div>


          <h1 className="text-3xl font-bold mb-10 mt-10">Traveling Condition</h1>
            <GoodBad destination={destination}></GoodBad>
            <Timeline pid={destinationId}></Timeline>
            <h1 className="text-3xl font-bold mb-10 mt-10">Weather</h1>
            <WeatherWidget destination={destination}></WeatherWidget>

            <h1 className="text-3xl font-bold mb-10 mt-10">Tourist</h1>
            <p className="text-justify mb-2">This graph shows Avarage Tourist Attendence at <b>{destination.name}</b> </p>
          <BarChart mons={destination.mons}></BarChart>
          <h1 className="text-3xl font-bold mb-10 mt-10">Map</h1>
          <MapCard className="z-0" destination={destination}></MapCard>
         <Item category={destination.category} className="m-10" num="4"></Item>
           
          <div className=" p-5 w-full md:flex mt-10 border-[1px] rounded-xl shadow-sm">
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
      <Footer></Footer>
    </>
  );
}

export default DestinationView;

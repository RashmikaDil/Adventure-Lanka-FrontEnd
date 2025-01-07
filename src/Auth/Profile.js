import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ProtectedRoute from './ProtectedRoute';
import axios from 'axios';

const Profile = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    function navTo(){
     navigate('../');
    }



    useEffect(() => {
        const fetchProfile = async () => {
          const token = localStorage.getItem('token');
          console.log(token);
    
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

    if (!profile) return <><p>Loading...</p>
      <button onClick={handleLogOut} className='bg-red-700 hover:bg-red-900 transition-all rounded-3xl text-white p-2 pr-10 pl-10 mt-10 '>Log Out</button>
        
    
    </>;

    function handleLogOut(){
        localStorage.removeItem('token');
        window.location.href = '/auth';
    }
    return (<>
<ProtectedRoute>
    <div className='w-full h-screen bg-gray-200 flex  justify-center items-center  '>
        
        <div className= ' text-[#02476e] rounded-sm  bg-white shadow-lg md:w-1/2 w-full h-full md:h-1/2 ' >
        <div className='flex items-center'>
        <FontAwesomeIcon onClick={navTo} icon={faArrowLeft} className='m-4 cursor-pointer  mr-10'></FontAwesomeIcon><h1>Profile</h1>
       </div>
        <div className='flex w-full h-full flex-col justify-center items-center  '>
        <FontAwesomeIcon icon={faUser} className='text-4xl mb-2'></FontAwesomeIcon>
        <h1 className='text-2xl font-bold '>{profile.name}</h1>
        <h1 className='text-xl  '>{profile.email}</h1>

        <button onClick={handleLogOut} className='bg-red-700 hover:bg-red-900 transition-all rounded-3xl text-white p-2 pr-10 pl-10 mt-10 '>Log Out</button>
        
        </div>
        
        
        </div>

    </div> </ProtectedRoute>   </>
    );
};

export default Profile;

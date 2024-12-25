import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ProtectedRoute from './ProtectedRoute';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    function navTo(){
     navigate('../');
    }



    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            console.log(token)  
            try {
                const response = await fetch('http://localhost:3002/api/auth/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setProfile(data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);

    if (!profile) return <p>Loading...</p>;

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

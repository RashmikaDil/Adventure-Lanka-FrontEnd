import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Register = () => {
  const navigates = useNavigate( );
  const apiUrl = process.env.REACT_APP_API_URL;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };

    try {
      const response = await fetch(`${apiUrl}api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Registration successful!');
      } else {
        setErrorMessage(data.message || 'Registration failed');
      }
    } catch (error) {
      setErrorMessage('Error: ' + error.message);
    }
  };

  return (


<div className='md:bg-gray-200 h-screen flex md:justify-center md:items-center w-full'>
      <div className="md:flex  bg-white  md:h-auto md:w-[900px] w-full h-1/2 md:shadow-lg text-[#02476e]">
        
    <div className="md:w-[45%] w-full h-auto p-8 pl-10 mb-10 md:mt-5">
      <h2 className='text-xl m-5 mb-8'>Register</h2>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label htmlFor="name" className='font-bold mb-2'>Username</label>
        <input
        className='ml-1 p-2 pl-4 mb-2 border-[#02476e] bg-gray-200 rounded-3xl '
          type="text"
          id="name"
          name="name"
          placeholder='UserName'
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className='font-bold mb-2'>Email</label>
        <input
        className='ml-1 p-2 pl-4 mb-2 border-[#02476e] bg-gray-200 rounded-3xl '
          type="email"
          placeholder='Email'
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password" className='font-bold mb-2'>Password</label>
        <input
        className='ml-1 p-2 pl-4 mb-2 border-[#02476e] bg-gray-200 rounded-3xl '
          type="password"
          id="password"
          placeholder='Password'
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword" className='font-bold mb-2'>Confirm Password</label>
        <input
        className='ml-1 p-2 pl-4 mb-2 border-[#02476e] bg-gray-200 rounded-3xl '
          type="password"
          id="confirmPassword"
          placeholder='ConfirmPassword'
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button className=' bg-[#02476e] p-2 text-white mt-5 md:mb-5 rounded-2xl'  type="submit" >Register</button>
     

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
    
    <div className=' text-white  font-bold text-2xl md:w-[65%] w-full md:h-auto h-1/2   bg-gradient-to-b from-[#02476e] to-[#010d1a] flex flex-col justify-center items-center'>
      <h1>First Time Around here ?</h1>
      <h1 className='font-normal text-sm'>or</h1>
<button onClick={()=> navigates('../auth')} className='pl-10 pr-10 p-2 m-4 font-normal text-sm bg-transparent border-2 border-[#02476e] hover:bg-[#02476e]  rounded-3xl transition-all'>


 
Login
</button>


        </div>
    </div>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;
    
    function navToHome(){
        navigate('../');
    };
    function navToReg(){
     navigate('../Register');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiUrl}api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                navToHome(); 
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login');
        }
    };

    return (
      <>
<div className='bg-gray-200 h-screen flex md:justify-center md:items-center w-full'>
      <div className="md:flex  bg-white  md:h-auto md:w-[900px] w-full h-1/2 md:shadow-lg text-gray-900">
        <div className='md:w-[45%] w-full p-8 pl-10 mb-10 md:mt-5'>
        <h1 className='text-xl m-5 mb-8 '>Sing In</h1>
        <form onSubmit={handleLogin} className='flex flex-col'>

          <label className='font-bold mb-2'>Email</label>
            <input 
                className='ml-1 p-2 pl-4 mb-2 border-gray-900 bg-gray-200 rounded-3xl '
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
          <label className='font-bold mb-2'>Password</label>
            <input
                className='ml-1 p-2 pl-4 mb-2 border-gray-900 bg-gray-200 rounded-3xl '
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button className=' bg-gray-900 p-2 text-white mt-5 md:mb-5 rounded-2xl' type="submit">Login</button>
        </form></div>
        <div className=' text-white  font-bold text-2xl md:w-[65%] w-full md:h-auto h-1/2   bg-gradient-to-b from-gray-900 to-[#010d1a] flex flex-col justify-center items-center'>
      <h1>Welcome Back !</h1>
      <h1 className='font-normal text-sm'>or</h1>
<button onClick={()=>navToReg()} className='pl-10 pr-10 p-2 m-4 font-normal text-sm bg-transparent border-2 border-gray-900 hover:bg-gray-900  rounded-3xl transition-all'>


Create Account

</button>


        </div>
        </div></div>
        </>
    );
};

export default Login;

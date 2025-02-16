import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

const CommentForm = ({uid, name, pId}) => {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${apiUrl}api/destinations/${pId}/comments`);
      setContent(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  
  useEffect(() => {
    fetchComments();
  });


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        `${apiUrl}api/destinations/${pId}/comments`,
        { name, content }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage('Comment created successfully!');
      console.log(response.data);
    } catch (error) {
      setMessage(`Error creating comment: ${error.response?.data?.message || error.message}`);
      console.error(error);
    };
    
  };

  return (
    <div className='w-full p-4 bg-white rounded-lg shadow-md border-[1px] '>
      <h2 className='text-2xl font-semibold mb-4 text-gray-800  '>Create Comment</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <textarea 
            className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button className=' px-4 py-2 text-white rounded-md transition-all bg-gray-900 hover:bg-gray-700 ' type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CommentForm;

import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({uid,name,pId}) => {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;
  
    
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}api/c_model/create`, {
        uid,
        name,
        pId,
        content,
        
      });

      setMessage('Comment created successfully!');
      console.log(response.data);
    } catch (error) {
      setMessage('Error creating comment.');
      console.error(error);
    }
  };
  

  return (
    <div className='w-full '>
      <h2 className='text-2xl mb-4  '>Create Comment</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
         
          <textarea 
            className='w-full mt-5'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button className='float-right p-2 bg-[#02476e] w-32 text-[#80cefc] mt-2 ' type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CommentForm;
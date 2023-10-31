import React, { useState } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordReset = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/forgot-password', {
        email: email,
      });

      if (response.status === 200) {
        setMessage(response.data.message);
      } else {
        setMessage('Password reset link could not be sent');
      }
    } catch (error) {
      setMessage('Internal server error');
      console.error(error);
    }
  };

  return (
    
    <div className="container overflow-y-hidden overflow-x-hidden bg-white">
  <div className="row justify-content-center align-items-center">
    <div className="col-md-6 col-sm-12 text-center">
      <img src="/images/forget.png" alt="" />
    </div>
    <div className="col-md-6 p-4 mt-4 col-sm-12">
      <h1 className="">Forgot Password?</h1>
      <p className='fs-2'>Enter the email address associated</p> <p className='fs-2'> with your account</p>
      <div className=''>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='col-form-label  p-2 border-1 mx-auto'
        />
      </div>
      <div className='text-center '>
        <button className=' p-2 ml-4 btn rounded btn-info text-white fw-bold fs-3' onClick={handlePasswordReset}>Send </button>

      </div>
      </div>
      <p>{message}</p>
      <div>
      </div>
    </div>
  </div>
</div>

  );
}

export default PasswordReset;

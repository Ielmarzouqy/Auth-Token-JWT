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
    <div>
      <h1>Password Reset</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handlePasswordReset}>Send Reset Link</button>
      <p>{message}</p>
      <div>
        {/* <a href=""> Change your password</a> */}
        <Link className="nav-link active" aria-current="page" to={`reset-password`}>Change your password</Link>

      </div>
    </div>
  );
}

export default PasswordReset;

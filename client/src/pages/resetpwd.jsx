import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function PasswordReset() {
const cardStyle = {
  width:" 25%",
};
  const [newPassword, setNewPassword] = useState({
    newPassword:''
  });
  const handleChange = (e) => {
    setNewPassword({
      ...newPassword,
      [e.target.name]: e.target.value,
    });
  };


  const [message, setMessage] = useState('');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  console.log("Token from URL:", token);
  const testToken= async ()=>{
  try {
    if (!token) {
      setMessage('Token is missing.');
      return;
    }
    const response = await axios.post(`http://localhost:5000/api/users/reset-password?token=${token}`,newPassword);
    console.log("Token from axios:", token);

          if (response.data.success) {
            setMessage(response.data.message);
          } else {
            setMessage('Password reset failed: ' + response.data.error);
          }
        } catch (error) {
          setMessage('Internal server error');
          console.error(error.message);
        }
      };

  return (

    <div className='container'>
      <div className='d-flex justify-content-center'>
      <img src="/images/bg2.png" style={cardStyle} className='' alt="" />
      </div>
      <div  className=" d-flex justify-content-center " >
        <div className="p-2 m-2">
          <form onSubmit={testToken}>
              <h1 className="">Password Reset</h1>
              <p className='fs-6'>Enter the new password your account</p>
              <input
                type="password"
                placeholder="Enter new password"
                onChange={handleChange}
                name="newPassword"
                className='col-form-label  align-items-center  p-2 border-1 mx-auto'
              />
          </form>
        </div>
      </div>
      <div>
        <p className="card-text text-center bg-success-light ">{message}</p>
      </div>
      <div className=' text-center p-4 d-flex justify-content-center '>    
        <button style={cardStyle} className=" p-2 ml-4 btn rounded btn-success text-white fw-bold fs-6" onClick={testToken}>Reset Password</button>
      </div>
    </div>
  );
}

export default PasswordReset;

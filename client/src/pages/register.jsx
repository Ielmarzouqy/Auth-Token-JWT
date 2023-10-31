// import {React, useState} from 'react';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon
  }
from 'mdb-react-ui-kit';

function Register() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    role: ''

  });
  const [roles, setRoles] = useState([]); // State to store the roles

  useEffect(() => {
    // Fetch roles from the backend when the component mounts
    Axios.get('http://localhost:5000/api/roles/role')
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:5000/api/users/register',formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (

    <MDBContainer fluid>

           <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
             <MDBCardBody>
               <MDBRow>
                 <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    
                   <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register Form</h1>
                     <form   onSubmit={handleFormSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4 ">
                        <MDBIcon fas icon="user me-3" size='lg'/>
                        <MDBInput label='Your Name'  name="userName"
                                      placeholder="Your Name"
                                      value={formData.userName}
                                      onChange={handleChange} id='form1' type='text' className='w-100'/>
                      </div>
    
                      <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="envelope me-3" size='lg'/>
                      <MDBInput label='Your Email'  name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange} id='form2' type='email'/>
                      </div>
    
                      <div className="d-flex flex-row align-items-center mb-4">
                        <MDBIcon fas icon="lock me-3" size='lg'/>
                        <MDBInput label='Password'   name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange} id='form3' type='password'/>
                      </div>
    
                      <div className="d-flex flex-row align-items-center mb-4">
                        <MDBIcon fas icon="key me-3" size='lg'/>
                          <MDBInput label='Repeat your password'  name="passwordConfirmation"
                          placeholder="Repeat your password"
                          value={formData.passwordConfirmation}
                          onChange={handleChange}  id='form4' type='password'/>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
  <select
    name="role"
    value={formData.role}
    onChange={handleChange}
    className="form-select"
  >
    {roles.map((role) => (
      <option key={role._id} value={role._id}>
        {role.name}
      </option>
    ))}
  </select>
</div>
    
                     <MDBBtn className='mb-4 bg-warning'  size='lg'>Register</MDBBtn>
                  </form>
                  </MDBCol>
    
                  <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                    <MDBCardImage src='/images/cover.png' fluid/>
                  </MDBCol>
    
                </MDBRow>
             </MDBCardBody>
           </MDBCard>
    
         </MDBContainer>

  );
}

export default Register;

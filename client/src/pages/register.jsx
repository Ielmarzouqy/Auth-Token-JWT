// import {React, useState} from 'react';
// import {
//     MDBBtn,
//     MDBContainer,
//     MDBRow,
//     MDBCol,
//     MDBCard,
//     MDBCardBody,
//     MDBCardImage,
//     MDBInput,
//     MDBIcon
//   }
// from 'mdb-react-ui-kit';
// import Axios from 'axios';

// function Register() {
//   const [formData, setFormData] = useState({
//     id:'',
//     userName: '',
//     email: '',
//     password: '',
//     passwordConfirmation: '',
//     role: "652eaed73b243ebd24c2db86"
//   });

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await Axios.post('http://localhost:5000/api/users/register', formData);
//       console.log(response.data); 
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
   
//     <MDBContainer fluid>

//       <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
//         <MDBCardBody>
//           <MDBRow>
//             <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

//               <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register Form</h1>
// <form   onSubmit={handleFormSubmit}>
//               <div className="d-flex flex-row align-items-center mb-4 ">
//                 <MDBIcon fas icon="user me-3" size='lg'/>
//                 <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="envelope me-3" size='lg'/>
//                 <MDBInput label='Your Email' id='form2' type='email'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="lock me-3" size='lg'/>
//                 <MDBInput label='Password' id='form3' type='password'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="key me-3" size='lg'/>
//                 <MDBInput label='Repeat your password' id='form4' type='password'/>
//               </div>

//               {/* <div className='mb-4'>
//                 <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//               </div> */}

//               <MDBBtn className='mb-4 bg-warning'  size='lg'>Register</MDBBtn>
//               </form>
//             </MDBCol>

//             <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
//               <MDBCardImage src='/images/cover.png' fluid/>
//             </MDBCol>

//           </MDBRow>
//         </MDBCardBody>
//       </MDBCard>

//     </MDBContainer>
//   );
// }
// export default Register;


import React, { useState } from 'react';
import Axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    role: "652eaed73b243ebd24c2db86"

  });

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
    <div>
      <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register Form</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Your Name"
          value={formData.userName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Repeat your password"
          value={formData.passwordConfirmation}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

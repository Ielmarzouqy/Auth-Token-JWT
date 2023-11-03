// import {React, useState} from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetUsers() {
  console.log("getUsers")
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users/users')
      .then((response) => {
        setUsers(response.data);
        console.log(response)
 
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
        <div className="d-flex flex-row align-items-center mb-4">
            <ul
                name="user"
                
            >
                {users.map((user) => (
                <li key={user._id} value={user._id}>
                    {user.userName}
                </li>
                ))}
            </ul>
        </div>

  );
}

export default GetUsers;

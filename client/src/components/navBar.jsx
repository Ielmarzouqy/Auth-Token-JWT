import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
function navBar() {
  return (
    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={`/Register`}>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to={`/Login`}>Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
   

  );
}

export default navBar;
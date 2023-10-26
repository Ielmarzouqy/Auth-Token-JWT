import React from 'react';


function sideBar() {
  return (
     
<header>
  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <a
          href="#"
          class="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Products</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
          <i class="fas fa-chart-area fa-fw me-3"></i><span>Orders</span>
        </a>
        
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
        
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-users fa-fw me-3"></i><span>Users</span></a>
        
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a>
        
      </div>
    </div>
  </nav>



  <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div class="container-fluid">
      
    
      <a class="navbar-brand" href="#">
        <img
          src="/images/logo.png"
          height="50"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
    
      

      <ul class="navbar-nav ms-auto d-flex flex-row">
        
       

      </ul>
    </div>
   
  </nav>
 
</header>
    
  );
}

export default sideBar;
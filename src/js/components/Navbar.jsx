import React from "react";



const Navbar = () => {
    return (
      
      <nav className="navbar bg-dark border-bottom border-body row" data-bs-theme="dark">
        <div className="col-1"></div>
        <div className="col-2 text-white">Start Bootstrap</div>
        <div className="col-4"></div>
        <div className="col-4 text-white d-flex justify-content-around">
          <a href="" className="text-decoration-none text-white">Home</a>
          <a href="" className="text-decoration-none text-white">About</a>
          <a href="" className="text-decoration-none text-white">Services</a>
          <a href="" className="text-decoration-none text-white">Contact</a>
        </div>
      <div className="col-1"></div>
      
      </nav>
   
    
    )
}






export default Navbar;
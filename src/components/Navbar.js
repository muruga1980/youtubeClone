import React from "react";
import logo from "../../src/assets/img/logo.png";
import profileImg from "../../src/assets/img/profileimg.jpg";

import './navbar.css'
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-md bg-body-tertiary mb-0 ">
  <div className="container-fluid">
    <div className="margleft">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/feed"><img src={logo} alt="YouTube Clone" title=""  style={{width:"100px"}}/></Link>
    </div>

    <div className="w-50">
       <SearchBar/>
    </div>

    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={profileImg} alt="" width="32" height="32" className="rounded-circle me-2" />
        <small>muruga</small>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small ">       
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
      </ul>
    </div>  
  </div>
</nav>
    </>
  );
};

export default Navbar;

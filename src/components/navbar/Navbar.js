import React from "react";
import facebook from '../../asserts/imgages/facebook.png';
import twitter from '../../asserts/imgages/twitter.png';
import pinterest from '../../asserts/imgages/pinterest.png';
import instagram from '../../asserts/imgages/instagram.png';
import search from '../../asserts/imgages/search.png';
import profileImage from '../../asserts/imgages/profile.jpg';

import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navLeft">
        <img src={facebook} className="navIcon" alt="images" /> 
        <img src={twitter} className="navIcon" alt="images" /> 
        <img src={pinterest} className="navIcon" alt="images" /> 
        <img src={instagram} className="navIcon" alt="images" /> 
      </div>
      <div className="navRight">
          <ul className="menuList">
            <li className="menuItem">Home</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Contact</li>
            <li className="menuItem">Write</li>
            <li className="menuItem">Log Out</li>
          </ul>
      </div>
      <div className="navRight">
          <img src={profileImage} className="profileImg" alt="image"/>
          <img src={search} className="searchIcon" alt="image"/>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import imgSidebar from "../../asserts/imgages/imgSidebar.jpg";
import facebook from '../../asserts/imgages/facebook.png';
import twitter from '../../asserts/imgages/twitter.png';
import pinterest from '../../asserts/imgages/pinterest.png';
import instagram from '../../asserts/imgages/instagram.png';
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <p className="sidebarTitle">ABOUT US</p>
      <img src={imgSidebar} className="sidebarImg" alt="image" />
      <p className="sidebarText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="sidebarTitle">CATEGORIES</p>
      <div className="sidebarCategories">
        <span className="sidebarCategory">Life</span>
        <span className="sidebarCategory">Music</span>
        <span className="sidebarCategory">Style</span>
        <span className="sidebarCategory">Sport</span>
        <span className="sidebarCategory">Tech</span>
        <span className="sidebarCategory">Cinema</span>
      </div>
      <p className="sidebarTitle">FOLLOW US</p>
      <div className="sidebarIcons">
        <img src={facebook} className="sidebarIcon" alt="images" /> 
        <img src={twitter} className="sidebarIcon" alt="images" /> 
        <img src={pinterest} className="sidebarIcon" alt="images" /> 
        <img src={instagram} className="sidebarIcon" alt="images" /> 
      </div>
    </div>
  );
};

export default Sidebar;

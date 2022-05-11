import React from "react";
import AsideIcon from "../AsideIcon/AsideIcon";
import Copyright from "../Copyright/Copyright";
import "./Sidebar.css";

/**
 * Render of Sidebar
 * @returns {JSX|Components} Return of required JSX and Components React
 */

const Sidebar = () => {
  return (
    <div className="sidebar">
      <AsideIcon />
      <Copyright />
    </div>
  );
};

export default Sidebar;

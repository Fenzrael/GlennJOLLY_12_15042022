import React from "react";
import AsideIcon from "../AsideIcon/AsideIcon";
import Copyright from "../Copyright/Copyright";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <AsideIcon />
      <Copyright />
    </div>
  );
};

export default Sidebar;

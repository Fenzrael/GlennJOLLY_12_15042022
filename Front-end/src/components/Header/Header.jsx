import React from "react";
import LogoHeader from "../LogoHeader/LogoHeader";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <LogoHeader />
      <NavigationHeader />
    </div>
  );
};

export default Header;

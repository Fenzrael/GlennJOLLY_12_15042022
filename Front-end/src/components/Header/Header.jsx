import React from "react";
import LogoHeader from "../LogoHeader/LogoHeader";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import "./Header.css";

/**
 * Render header of the SPA with navigation Site
 * @returns {JSX|Components} Return of required JSX and Components
 */

const Header = () => {
  return (
    <div className="header">
      <LogoHeader />
      <NavigationHeader />
    </div>
  );
};

export default Header;

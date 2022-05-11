import React from "react";
import "./AsideIcon.css";

/**
 * Render icons Sidebar
 * @returns {JSX} Return of required JSX
 */

const AsideIcon = () => {
  return (
    <div className="sidebar__icon container">
      <img className="container__icon" src="../img/yoga_icon.png" alt="yoga" />
      <img className="container__icon" src="../img/swim_icon.png" alt="yoga" />
      <img className="container__icon" src="../img/velo_icon.png" alt="yoga" />
      <img className="container__icon" src="../img/sport_icon.png" alt="yoga" />
    </div>
  );
};

export default AsideIcon;

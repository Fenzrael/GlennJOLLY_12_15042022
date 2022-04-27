import React from "react";
import "./Copyright.css";

const Copyright = () => {
  return (
    <div className="sidebar__copyright copyright">
      <img
        className="copyright__icon"
        src="../img/copyright.png"
        alt="copyright"
      />
      <p className="copyright__description">Copyright, SportSee 2020</p>
    </div>
  );
};

export default Copyright;

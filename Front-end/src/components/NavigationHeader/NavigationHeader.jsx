import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationHeader.css";

const NavigationHeader = () => {
  return (
    <ul className="header__nav nav">
      <NavLink
        className={({ isActive }) => (isActive ? "nav__active" : "nav__link")}
        to="/"
      >
        <li>Accueil</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "nav__active" : "nav__link")}
        to="/profile"
      >
        <li>Profil</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "nav__active" : "nav__link")}
        to="/settings"
      >
        <li>Réglage</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "nav__active" : "nav__link")}
        to="/community"
      >
        <li>Communauté</li>
      </NavLink>
    </ul>
  );
};

export default NavigationHeader;

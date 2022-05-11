import React from "react";
import { Link } from "react-router-dom";
import "./SelectUser.css";

/**
 * Render of Selection of User
 * @returns {JSX|Methods React} Return of required JSX and Method React
 */

const SelectUser = () => {
  return (
    <div className="selectUser">
      <p className="selectUser__text">
        Sélectionnez un Utilisateur afin d'étudier ses performances:
      </p>
      <br />
      <section className="selectUser__container">
        <Link to="/user/12" className="selectUser__link">
          Karl Dovineau
        </Link>
        <Link to="/user/18" className="selectUser__link">
          Cécilia Ratorez
        </Link>
      </section>
    </div>
  );
};

export default SelectUser;

import React from "react";
import { Link } from "react-router-dom";
import "./SelectUser.css";

const SelectUser = () => {
  return (
    <div className="user">
      <p className="user__text">
        Sélectionnez un Utilisateur afin d'étudier ses performances:
      </p>
      <br />
      <section className="user__container">
        <Link to="/user/12" className="user__link">
          Karl Dovineau
        </Link>
        <Link to="/user/18" className="user__link">
          Cécilia Ratorez
        </Link>
      </section>
    </div>
  );
};

export default SelectUser;

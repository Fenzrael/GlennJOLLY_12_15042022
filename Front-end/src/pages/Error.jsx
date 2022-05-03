import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/Sidebar";

const Error = () => {
  const errorStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "2rem",
    fontSize: "24rem",
  };
  return (
    <div>
      <Header />
      <Sidebar />
      <section className="error" style={errorStyle}>
        <p className="error__text1" style={{ color: "red" }}>
          404
        </p>
        <p className="error__text2" style={{ fontSize: "24px" }}>
          page Introuvable
        </p>
      </section>
    </div>
  );
};

export default Error;

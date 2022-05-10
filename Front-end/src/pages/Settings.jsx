import React from "react";
import Header from "../components/Header/Header";
import InProgress from "../components/InProgress/InProgress";
import Sidebar from "../components/SideBar/Sidebar";

/**
 * Settings Page
 * @returns JSX + Components React
 */

const Settings = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <InProgress />
    </div>
  );
};

export default Settings;

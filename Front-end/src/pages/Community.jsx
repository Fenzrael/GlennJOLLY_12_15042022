import React from "react";
import Header from "../components/Header/Header";
import InProgress from "../components/InProgress/InProgress";
import Sidebar from "../components/SideBar/Sidebar";

/**
 * Community Page
 * @returns JSX + Components React
 */

const Community = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <InProgress />
    </div>
  );
};

export default Community;

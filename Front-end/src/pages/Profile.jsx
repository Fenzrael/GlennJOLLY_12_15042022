import React from "react";
import Header from "../components/Header/Header";
import SelectUser from "../components/SelectUser/SelectUser";
import Sidebar from "../components/SideBar/Sidebar";
import ExerciceRadarChart from "../components/ExerciceRadarChart/ExerciceRadarChart";

const Profile = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <SelectUser />
      <ExerciceRadarChart />
    </div>
  );
};

export default Profile;

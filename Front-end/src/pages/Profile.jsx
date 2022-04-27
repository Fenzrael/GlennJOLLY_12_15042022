import React from "react";
import ExerciceRadarChart from "../components/ExerciceRadarChart/ExerciceRadarChart";
import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/Sidebar";
import TimeLineChart from "../components/TimeLineChart/TimeLineChart";

const Profile = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <TimeLineChart />
      <ExerciceRadarChart />
    </div>
  );
};

export default Profile;

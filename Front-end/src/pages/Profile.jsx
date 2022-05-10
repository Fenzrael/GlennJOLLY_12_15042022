import React from "react";
import Header from "../components/Header/Header";
import SelectUser from "../components/SelectUser/SelectUser";
import Sidebar from "../components/SideBar/Sidebar";

/**
 * Profile Page
 * @returns JSX + Components react
 */
const Profile = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <SelectUser />
    </div>
  );
};

export default Profile;

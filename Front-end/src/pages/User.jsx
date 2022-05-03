import { useParams } from "react-router-dom";
import { useRequestDatas } from "../services/apiService";
import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/Sidebar";

const User = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useRequestDatas(id);
  console.log(data);
  // data.user? verifie si les données du endpoint sont presents si oui le reste du code va chercher la donnée voulue
  const firstName = data.user?.userInfos.firstName; // ici on va chercher le prenom
  console.log(firstName);

  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
};

export default User;

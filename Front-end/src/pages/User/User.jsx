import { useParams } from "react-router-dom";
import { useRequestDatas } from "../../services/apiService";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import ActivityBarChart from "../../components/ActivityBarChart/ActivityBarChart";
import TimeLineChart from "../../components/TimeLineChart/TimeLineChart";
import "./User.css";
import ExerciceRadarChart from "../../components/ExerciceRadarChart/ExerciceRadarChart";
import ScoreRadialBarChart from "../../components/ScoreRadialBarChart/ScoreRadialBarChart";

const User = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useRequestDatas(id);
  console.log(data);
  // data.user? verifie si les données du endpoint sont presents si oui le reste du code va chercher la donnée voulue
  const firstName = data.user?.userInfos.firstName; // ici on va chercher le prenom
  const averageUser = data.average?.sessions;
  const activityUser = data.activity?.sessions;
  const performUser = data.perform?.data;
  const todayScore = data.user?.todayScore;
  const percentageUser = todayScore * 100;
  console.log(percentageUser);

  return (
    <div>
      <Header />
      <Sidebar />

      <section className="user">
        {/* Container presentation de l'Utilisateur */}
        <div className="user__presentation">
          <p className="user__hello">
            Bonjour <span className="user__firstName">{firstName}</span>
          </p>
          <br />
          <p className="user__congratulation">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>

        {/* Graphique Barre Activité */}
        <ActivityBarChart data={activityUser} />

        {/* container des graphique du bas(timeline, score, exercice) */}
        <div className="user__chartsDown">
          <TimeLineChart data={averageUser} />
          <ExerciceRadarChart data={performUser} />
          <ScoreRadialBarChart data={percentageUser} />
        </div>
      </section>
    </div>
  );
};

export default User;

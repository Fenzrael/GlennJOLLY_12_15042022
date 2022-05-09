import { useParams } from "react-router-dom";
import { useRequestDatas } from "../../services/apiService";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import ActivityBarChart from "../../components/ActivityBarChart/ActivityBarChart";
import TimeLineChart from "../../components/TimeLineChart/TimeLineChart";
import "./User.css";
import ExerciceRadarChart from "../../components/ExerciceRadarChart/ExerciceRadarChart";
import ScoreRadialBarChart from "../../components/ScoreRadialBarChart/ScoreRadialBarChart";
import KeyDataCard from "../../components/KeyDataCard/KeyDataCard";
import { useEffect, useState } from "react";

const User = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useRequestDatas(id);
  const [performUserData, setPerformUserData] = useState({});

  const performUser = data.perform?.data;

  const kindObj = data.perform?.kind;

  const firstName = data.user?.userInfos.firstName; // ici on va chercher le prenom
  const keyData = data.user?.keyData;

  const averageUser = data.average?.sessions;
  const activityUser = data.activity?.sessions;
  const todayScore = data.user?.todayScore;
  const percentageUser = todayScore * 100;

  // UseEffect verifiant si les données requises(kindObj, performUser, ...etc) sont disponibles
  useEffect(() => {
    if (!kindObj || !performUser) {
      return;
    }

    setPerformUserData(
      performUser.map((el) => {
        el.kind = kindObj[el.kind];
        return el;
      })
    );
  }, [kindObj, setPerformUserData, performUser]);

  // Si je faisais un loader
  /* if (isLoading) {
      return <div>Loading...</div>;
    } */
  // data.user? verifie si les données du endpoint sont presents si oui le reste du code va chercher la donnée voulue

  return (
    <div>
      <Header />
      <Sidebar />

      <section className="user">
        <div className="part__left">
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
            <ExerciceRadarChart
              data={performUserData}
              /* tickFormatter={kindNumToWord} */
            />
            <ScoreRadialBarChart data={percentageUser} />
          </div>
        </div>
        <div className="user__data keyData part__right">
          <KeyDataCard
            nameKeyData="calorieCount"
            /* count={}  */ unity="KCal"
          />
          <KeyDataCard nameKeyData="proteinCount" /* count={}  */ unity="g" />
          <KeyDataCard
            nameKeyData="carbohydrateCount"
            /* count={}  */ unity="g"
          />
          <KeyDataCard nameKeyData="lipidCount" /* count={}  */ unity="g" />
        </div>
      </section>
    </div>
  );
};

export default User;

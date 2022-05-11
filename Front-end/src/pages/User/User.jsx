// import utilitaires
import { useParams } from "react-router-dom";
import { useRequestDatas } from "../../services/apiService";
import { useEffect, useState } from "react";
import "./User.css";

// import des differents graphes et des composants de la page utilisateur
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import ActivityBarChart from "../../components/ActivityBarChart/ActivityBarChart";
import TimeLineChart from "../../components/TimeLineChart/TimeLineChart";
import ExerciceRadarChart from "../../components/ExerciceRadarChart/ExerciceRadarChart";
import ScoreRadialBarChart from "../../components/ScoreRadialBarChart/ScoreRadialBarChart";
import KeyDataCard from "../../components/KeyDataCard/KeyDataCard";

/**
 * User Page rendered by click on the user button
 * @returns Charts for User selected and Private User Details
 */

const User = () => {
  // recherche utilisateur par id
  const { id } = useParams();

  // destructuring pour incorporer les datas le loader et les erreurs du fichier service
  const { data /*, isLoading, error  */ } = useRequestDatas(id);

  // etat des performances utilisateurs
  const [performUserData, setPerformUserData] = useState({});
  const performUser = data.perform?.data;
  const kindObj = data.perform?.kind;

  // variable capturant les details des cartes Utilisateur
  const calorieCountUser = data.user?.keyData.calorieCount;
  const proteinCountUser = data.user?.keyData.proteinCount;
  const carbohydrateCountUser = data.user?.keyData.carbohydrateCount;
  const lipidCountUser = data.user?.keyData.lipidCount;

  // prenom utilisateur
  const firstName = data.user?.userInfos.firstName; // ici on va chercher le prenom

  // incorporation des end points average et activity
  const averageUser = data.average?.sessions;
  const activityUser = data.activity?.sessions;

  // Pourcentage score utilisateur
  const todayScore = data.user?.todayScore;
  const percentageUser = todayScore * 100;

  // UseEffect verifiant si les données requises(kindObj, performUser, ...etc) sont disponibles
  // remplacement du numero de l'objet kind(kindObj) fournit grace au endpoint backend performance par le mot de l'activité correspondante (performUser)
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
            <ExerciceRadarChart data={performUserData} />
            <ScoreRadialBarChart
              data={percentageUser}
              percentage={percentageUser + "%"}
            />
          </div>
        </div>
        <div className="user__data keyData part__right">
          <KeyDataCard
            nameKeyData="calorieCount"
            count={calorieCountUser}
            unity="KCal"
            type="Calories"
          />
          <KeyDataCard
            nameKeyData="proteinCount"
            count={proteinCountUser}
            unity="g"
            type="Protéines"
          />
          <KeyDataCard
            nameKeyData="carbohydrateCount"
            count={carbohydrateCountUser}
            unity="g"
            type="Glucides"
          />
          <KeyDataCard
            nameKeyData="lipidCount"
            count={lipidCountUser}
            unity="g"
            type="Lipides"
          />
        </div>
      </section>
    </div>
  );
};

export default User;

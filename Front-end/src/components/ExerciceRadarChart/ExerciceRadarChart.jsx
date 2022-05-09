import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import "./ExerciceRadarChart.css";

const ExerciceRadarChart = (props) => {
  console.log(props);
  return (
    <div className="exercice">
      {/*  Changer position éléments: comme on est sur un hexagone on modifie les valeurs des angles par 60 degrés (stArtAngle etant par defaut sur 90°, ET endAngle sur 270°) */}
      <RadarChart
        outerRadius={100}
        width={258}
        height={263}
        startAngle={-150}
        endAngle={210}
        data={props.data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{
            fill: "#fff",
            fontSize: "10",
            fontWeight: "bold",
          }}
        />
        <PolarRadiusAxis
          angle={15}
          axisLine={false}
          tick={false}
          tickCount={6}
        />
        <Radar
          dataKey="value"
          stroke="#ff0000"
          fill="#ff0000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default ExerciceRadarChart;

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "./ExerciceRadarChart.css";

const data = [
  {
    subject: "Intensité",
    A: 120,
  },
  {
    subject: "Vitesse",
    A: 98,
  },
  {
    subject: "Force",
    A: 86,
  },
  {
    subject: "Endurance",
    A: 99,
  },
  {
    subject: "Energie",
    A: 85,
  },
  {
    subject: "Cardio",
    A: 65,
  },
];

const ExerciceRadarChart = (props) => {
  return (
    <div className="exercice">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="subject" stroke="white" tickLine={false} />
          <Radar name="Mike" dataKey="A" fill="#ff0101" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExerciceRadarChart;

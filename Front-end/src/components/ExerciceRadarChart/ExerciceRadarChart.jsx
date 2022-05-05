import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import "./ExerciceRadarChart.css";

const ExerciceRadarChart = (props) => {
  return (
    <div className="exercice">
      <RadarChart
        outerRadius={90}
        width={258}
        height={263}
        startAngle={-150}
        endAngle={210}
        data={props.data}
        style={{
          background: "#282d30",
          borderRadius: "5px",
        }}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{
            fill: "#ffffff",
            fontSize: "12",
          }}
        />
        <PolarRadiusAxis
          angle={15}
          axisLine={false}
          /* domain={[0, 250]} */
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

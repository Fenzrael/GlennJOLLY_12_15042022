import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import "./ScoreRadialBarChart.css";

const ScoreRadialBarChart = (props) => {
  return (
    <div className="score">
      <h2 className="score__title" style={{ fontSize: "15px", margin: "1rem" }}>
        Score
      </h2>
      <div className="score__percentage percentage">
        <p className="percentage__total">{props.percentage}</p>
        <p className="percentage__describe">De Votre Objectif</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="40%"
          innerRadius="70%"
          outerRadius="70%"
          startAngle={180}
          endAngle={-360}
          barSize={10}
          data={[
            { todayScore: 100, fill: "#fff" },
            { todayScore: props.data, fill: "#f00" },
          ]}
        >
          <RadialBar minAngle={15} clockWise dataKey="todayScore" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreRadialBarChart;

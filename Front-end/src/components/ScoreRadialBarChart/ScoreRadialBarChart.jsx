import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import "./ScoreRadialBarChart.css";

const ScoreRadialBarChart = (props) => {
  return (
    <div className="result">
      <h2 className="exercice__title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          /* width={5000}
          height={3000} */
          cx="50%"
          cy="50%"
          innerRadius="90%"
          outerRadius="90%"
          startAngle={180}
          endAngle={0}
          barSize={10}
          data={[
            { todayScore: 100, fill: "#fff" },
            { todayScore: props.data, fill: "#f00" },
          ]}
        >
          <RadialBar
            minAngle={15}
            /* label={{ position: "center", fill: "#000" }} */
            clockWise
            dataKey="todayScore"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreRadialBarChart;

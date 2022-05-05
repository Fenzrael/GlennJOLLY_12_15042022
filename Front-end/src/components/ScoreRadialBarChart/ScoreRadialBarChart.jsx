import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./ScoreRadialBarChart.css";

const ScoreRadialBarChart = (props) => {
  return (
    <div className="result">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={props.data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "center", fill: "#fff" }}
            background
            clockWise
            dataKey="todayScore"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={props.style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreRadialBarChart;

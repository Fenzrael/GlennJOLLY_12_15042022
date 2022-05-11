import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import "./ExerciceRadarChart.css";

/**
 *
 * RadarChart with Hexagon who represent different datas of User activities
 * @param {Array} data Array of Objects with relative datas
 * @returns {JSX|Components} Return of required JSX and Components
 */

const ExerciceRadarChart = (props) => {
  return (
    <div className="exercice">
      {/*  Changer position éléments: comme on est sur un hexagone on modifie les valeurs des angles par 60 degrés (stArtAngle etant par defaut sur 90°, ET endAngle sur 270°) */}
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={70}
          startAngle={-150}
          endAngle={210}
          data={props.data}
        >
          {/* {console.log(props.data)} */}
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
      </ResponsiveContainer>
    </div>
  );
};

ExerciceRadarChart.propTypes = {
  data: PropTypes.array,
};

export default ExerciceRadarChart;

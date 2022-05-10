import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./TimeLineChart.css";

// tooltip personnalise permettant d'avoir la dureee des sessions en minutes fond rouge couleur blanche
const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom__tooltip">
        <p className="min">{`${payload[0].value} min`}</p>
      </div>
    );
  }
};

const TimeLineChart = (props) => {
  return (
    <div className="timeline">
      <h2 className="timeline__title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width="100%"
          height="100%"
          data={props.data}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        >
          <XAxis
            dataKey="day"
            stroke="#ffffff"
            tickLine={false}
            axisLine={false}
            tick={true}
          />
          <Tooltip
            cursor={{
              stroke: "black",
              strokeOpacity: 0.2,
              strokeWidth: 70,
            }}
            content={<CustomToolTip />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeLineChart;

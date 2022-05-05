import { LineChart, Line, XAxis, Tooltip } from "recharts";
import "./TimeLineChart.css";

// Exemple data fournit par recharts
/* const data = [
  {
    day: "L",
    sessionLength: 24,
  },
  {
    day: "M",
    sessionLength: 13,
  },
  {
    day: "M",
    sessionLength: 98,
  },
  {
    day: "J",
    sessionLength: 39,
  },
  {
    day: "V",
    sessionLength: 48,
  },
  {
    day: "S",
    sessionLength: 38,
  },
  {
    day: "D",
    sessionLength: 43,
  },
]; */

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
      <LineChart
        width={258}
        height={263}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
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
    </div>
  );
};

export default TimeLineChart;

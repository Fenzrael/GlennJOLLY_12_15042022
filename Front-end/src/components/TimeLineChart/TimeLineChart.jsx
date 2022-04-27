import { LineChart, Line, XAxis, Tooltip } from "recharts";
import "./TimeLineChart.css";

const data = [
  {
    day: "L",
    time: 24,
  },
  {
    day: "M",
    time: 13,
  },
  {
    day: "M",
    time: 98,
  },
  {
    day: "J",
    time: 39,
  },
  {
    day: "V",
    time: 48,
  },
  {
    day: "S",
    time: 38,
  },
  {
    day: "D",
    time: 43,
  },
];

const TimeLineChart = () => {
  return (
    <div className="timeline">
      <h2 className="timeline__title">Durée moyenne des sessions</h2>
      <LineChart
        width={300}
        height={300}
        data={data}
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
        />
        <Line
          type="monotone"
          dataKey="time"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default TimeLineChart;

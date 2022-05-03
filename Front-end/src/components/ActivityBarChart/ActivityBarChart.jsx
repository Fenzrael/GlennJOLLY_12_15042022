import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "./ActivityBarChart.css";

const data = [
  {
    name: "1",
    kilo: 24,
    calo: 24,
  },
  {
    name: "2",
    kilo: 13,
    calo: 13,
  },
  {
    name: "3",
    kilo: 69,
    calo: 39,
  },
  {
    name: "4",
    kilo: 39,
    calo: 19,
  },
  {
    name: "5",
    kilo: 48,
    calo: 28,
  },
  {
    name: "6",
    kilo: 38,
    calo: 8,
  },
  {
    name: "7",
    kilo: 43,
    calo: 53,
  },
  {
    name: "8",
    kilo: 43,
    calo: 13,
  },
  {
    name: "9",
    kilo: 43,
    calo: 23,
  },
  {
    name: "10",
    kilo: 43,
    calo: 33,
  },
];

const ActivityBarChart = (props) => {
  return (
    <div className="activity">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 5" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis
          orientation="right"
          axisLine={false}
          tickLine={false}
          tickSize={30}
        />
        <Tooltip />
        <Bar
          dataKey="kilo"
          fill="#282D30"
          radius={[30, 30, 0, 0]}
          maxBarSize={12}
        />
        <Bar
          dataKey="calo"
          fill="#E60000"
          radius={[30, 30, 0, 0]}
          maxBarSize={12}
        />
      </BarChart>
    </div>
  );
};

export default ActivityBarChart;

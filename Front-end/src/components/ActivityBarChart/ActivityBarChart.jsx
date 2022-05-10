import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./ActivityBarChart.css";

// custom tooltip pour la legende au survol(kg et kcal)
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activity__tooltip tooltip">
        <p className="tooltip__kg">{`${payload[0].value}kg`}</p>
        <p className="tooltip__kcal">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

const ActivityBarChart = (props) => {
  return (
    <div className="activity">
      <div className="activity__legend legend">
        <h4 className="legend__title">Activite Quotidienne</h4>
        <div className="legend__type type">
          <p className="type__kg">
            <img
              src="../img/circle_legend_activityBarChart.svg"
              alt="black_circle"
            />
            Poids(kg)
          </p>
          <p className="type__kcal">
            <img
              src="../img/circle_red_legend_activityBarChart.svg"
              alt="red_circle"
            />
            Calories brûlées(kCal)
          </p>
        </div>
      </div>
      <ResponsiveContainer width="95%" height={320}>
        <BarChart
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 5" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickSize={30}
          />
          <Tooltip width={50} content={<CustomTooltip />} />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            radius={[30, 30, 0, 0]}
            maxBarSize={12}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            radius={[30, 30, 0, 0]}
            maxBarSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityBarChart;

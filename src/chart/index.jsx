import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { useSelector } from "react-redux";

const GaugeChart = () => {
  const gaugeValue = useSelector((state) => state.gauge.value);
  // Convert percentage to angle for rotation
  const angle = (gaugeValue / 100) * 180;

  // Data for the gauge
  const data = [{ value: gaugeValue }, { value: 100 - gaugeValue }];

  // Colors for the gauge (foreground and background)
  const colors = ["#6a0dad", "#333"];

  return (
    <div className="gauge-container">
      <PieChart width={300} height={200} margin={{ top: 170 }}>
        <Pie
          animationBegin={0}
          animationEasing="linear"
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>

      {/* Percentage Labels */}
      <div className="label label-0">0%</div>
      <div className="label label-25">25%</div>
      <div className="label label-50">50%</div>
      <div className="label label-75">75%</div>
      <div className="label label-100">100%</div>

      {/* Needle */}
      <div
        className="needle"
        style={{
          transform: `rotate(${angle - 90}deg) translateX(-50%)`,
        }}
      />
    </div>
  );
};
export default GaugeChart;

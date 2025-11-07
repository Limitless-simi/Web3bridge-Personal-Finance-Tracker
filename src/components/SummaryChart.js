import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function SummaryChart({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  const COLORS = ["#82ca9d", "#ff7f7f"];

  return (
    <div className="summary-chart">
      <h2>Summary Chart</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SummaryChart;

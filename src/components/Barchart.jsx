import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const Barchart = ({ data }) => {
  return (
    <div className="barchartContainer">
      <ResponsiveContainer className="myBarChart" width="50%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 4]} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="count"
            fill="#8884d8"
            barSize={40}
            barGap={5}
            barCategoryGap={5}
            activeBar={<Rectangle fill="green" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;

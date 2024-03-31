import React from "react";
import data from "./weather.json"
import {
    AreaChart,
    LineChart,
    BarChart,
    Area,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";

const dataUsed = data.slice(-15)

const Temp = () => {
    return(
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dataUsed}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="5 5" /> */}
          <XAxis dataKey="Time" tick={false}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            type="monotone"
            dataKey="Temp"
            stroke="#2536eb"
            fill="#3b82f6"
            stackId={1}
          />
        </BarChart>
      </ResponsiveContainer>
    );

};

export default Temp
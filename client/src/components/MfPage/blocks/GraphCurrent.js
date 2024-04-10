import { React, useState, useEffect } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";

const GraphCurrent = () => {
    const [data, setData] = useState(null); // Initialize state with null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://qts.iitkgp.ac.in/last/gail/current/20"
        );
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData.reverse()); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
    return(
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
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
          <XAxis dataKey="Time" tick={false} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="current"
            stroke="#2536eb"
            fill="#3b82f6"
            stackId={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
};

export default GraphCurrent;
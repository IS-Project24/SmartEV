import { React, useState, useEffect } from "react";
import {
    AreaChart,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Area,
  } from "recharts";

const CurrentGraph = () => {
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
        // console.log('response:', jsonData);
        setData(jsonData); // Update state with fetched data
        console.log("Fetched data:", jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // console.log('couldnt fetch data:');
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

export default CurrentGraph;
// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';
// import moment from 'moment';

// const Dropdown = () => {
//   const dropdownOptions = [5, 10, 20, 50, 100];
//   const [selectedValue, setSelectedValue] = useState(5); // Set the initial value to 5

//   const handleDropdownChange = (event) => {
//     setSelectedValue(parseInt(event.target.value));
//   };

//   return (
//     <div>
//       <select id="dropdown" value={selectedValue} onChange={handleDropdownChange}>
//         {dropdownOptions.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// const MyComponent = () => {
//   const dropdownOptions = [5, 10, 20, 50, 100];
//   const [selectedValue, setSelectedValue] = useState(5);

//   const handleDropdownChange = (event) => {
//     setSelectedValue(parseInt(event.target.value));
//   };

//   // Pass selectedValue as a prop to the ChildComponent
//   return (
//     <div>
//       <select id="dropdown" value={selectedValue} onChange={handleDropdownChange}>
//         {dropdownOptions.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//       <ChildComponent selectedValue={selectedValue} /> {/* Pass selectedValue */}
//     </div>
//   );
// };

// const ChildComponent = ({ selectedValue }) => {
//   return (
//     <p>Selected value from parent: {selectedValue}</p>
//   );
// };

// export default MyComponent;

// Chart.register(Chart.adapters.date);

// const LineChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('qts.iitkgp.ac.in/last/gail/current/2');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const chartData = {
//     datasets: [
//       {
//         label: 'Current',
//         data: data.map((item) => ({
//           x: moment(item.Time),
//           y: item.current,
//         })),
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       {
//         label: 'Frequency',
//         data: data.map((item) => ({
//           x: moment(item.Time),
//           y: item.freq,
//         })),
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'time',
//         time: {
//           unit: 'minute',
//           displayFormats: {
//             minute: 'HH:mm:ss',
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <Line data={chartData} options={options} />
//     </div>
//   );
// };

// const Box4 = () => {
//   return (
//     <div className="box-4">
//       <Dropdown />
//       <LineChart />
//     </div>
//   );
// }

// export default Box4;

import { React, useState, useEffect } from "react";
import CurrentGraph from "./CurrentGraph";
import FreqGraph from "./FreqGraph";
import "./Box4.css";

export default function Box4() {
  return (
    // <ResponsiveContainer width="100%" height="100%">
    //   <AreaChart
    //     width={500}
    //     height={300}
    //     data={data}
    //     margin={{
    //       top: 5,
    //       right: 30,
    //       left: 20,
    //       bottom: 5,
    //     }}
    //   >
    //     {/* <CartesianGrid strokeDasharray="5 5" /> */}
    //     <XAxis dataKey="Time" tick={false} />
    //     <YAxis />
    //     <Tooltip />
    //     <Legend />
    //     <Area
    //       type="monotone"
    //       dataKey="current"
    //       stroke="#2536eb"
    //       fill="#3b82f6"
    //       stackId={1}
    //     />
    //     <Area type="monotone" dataKey="freq" stroke="#7c3aed" fill="8b5cf6" stackId={1}/>
    //   </AreaChart>
    // </ResponsiveContainer>
    <div className="box4">
      <div className="cr-graph">
        <CurrentGraph/>
      </div>
      <div className="fr-graph">
        <FreqGraph/>
      </div>
    </div>
  );
}

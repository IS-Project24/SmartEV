// import React, { useState, useEffect } from 'react';

// const API_KEY = 'ed68dcdac8b609ffbc61372618b97038';
// const CITY_NAME = 'London'; // Example city name

// const WeatherData = () => {
//   const [weatherData, setWeatherData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();
        
//         const newDataEntry = {
//           temperature: data.main.temp,
//           humidity: data.main.humidity,
//           timestamp: new Date().toISOString()
//         };

//         // Load existing data from localStorage
//         let existingData = JSON.parse(localStorage.getItem('weatherData')) || [];
        
//         // Append new data entry
//         existingData.push(newDataEntry);
        
//         // Ensure that the number of entries does not exceed 50
//         if (existingData.length > 50) {
//           existingData = existingData.slice(-50);
//         }
        
//         // Save data to localStorage
//         localStorage.setItem('weatherData', JSON.stringify(existingData));
        
//         // Update state with latest data
//         setWeatherData(existingData);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     // Fetch data initially
//     fetchData();

//     // Fetch data every 30 minutes
//     const intervalId = setInterval(fetchData, 30 * 60 * 1000);

//     // Cleanup function
//     return () => clearInterval(intervalId);
//   }, []);

//   // Get the latest 5 entries
//   const latestEntries = weatherData.slice(-5);

//   return (
//     <div>
//       <h2>Latest Weather Data for {CITY_NAME}:</h2>
//       <ul>
//         {latestEntries.map((entry, index) => (
//           <li key={index}>
//             <strong>Temperature:</strong> {entry.temperature}°C, <strong>Humidity:</strong> {entry.humidity}%, <strong>Timestamp:</strong> {entry.timestamp}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default WeatherData;
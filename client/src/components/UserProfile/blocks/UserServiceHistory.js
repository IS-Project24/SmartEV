import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCard from "./DisplayCard";


function ServiceHistory() {
  // toast

  const [data, setData] = useState([]);
  const [vehicleid] = useState("hero");
  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory() {
    axios
      .get("http://10.29.8.31:5000/service-history/get", {
        // .get("http://localhost:5000/service-history/get", {
        params: {
          vehicleid: vehicleid,
        },
      })
      .then(function (response) {
        setData(response.data.service_history);
        //   setData(response.data.fault_history);
      })
      .catch(function (error) {
        // Handle error
        console.error("Error fetching fault history:", error);
      });
  }

  // Fault register
  return (
    <div>
      <p
        style={{
          color: "black",
          fontSize: "2.5vh",
          textAlign: "center",
          marginBottom: "0.5rem",
        }}
      >
        Service History
      </p>
      <div
        className="overflow-y-auto"
        style={{
          height: "400px",
          borderRadius: "1rem",
          scrollbarWidth: "none",
        }}
      >
    
        {data
          .slice()
          .reverse()
          .map((entry) => (
            <DisplayCard
              key={entry.service_history_id}
              name={entry.description}
              timestamp={entry.timestamp}
            />
          ))}
      </div>
    </div>
  );
}

export default ServiceHistory;

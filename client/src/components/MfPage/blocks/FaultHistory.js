import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCard from "./DisplayCard";
import "./FaultHistory.css";

const FaultHistory = () => {
  const [data, setData] = useState([]);
  const [vehicleid, setVehicleid] = useState("hero");
  useEffect(() => {
    fetchHistory(); 
  }, []); 

  async function fetchHistory() {
    axios
      .get("http://10.29.8.31:5000/fault-history/get", {
      // .get("http://localhost:5000/fault-history/get", {
        params: {
          vehicleid: vehicleid,
        },
      })
      .then(function (response) {
        setData(response.data.fault_history);
      })
      .catch(function (error) {
        // Handle error
        console.error("Error fetching fault history:", error);
      });
  }



  return (
    <div className="Fault-history">
      <p className="fault-history-text">Fault History</p>
      {data.map((entry) => (
        <DisplayCard
          key={entry.fault_history_id}
          description={entry.description}
          timestamp={entry.timestamp}
        />
      ))}
    </div>
  );
};

export default FaultHistory;

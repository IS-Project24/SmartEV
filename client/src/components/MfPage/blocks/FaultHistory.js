import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCard from "./DisplayCard";
// import "./FaultHistory.css";

const FaultHistory = () => {
  const [data, setData] = useState([]);
  const [vehicleid] = useState("hero");
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
    <div>
      <p style={{ color: "black", fontSize: "2.5vh", textAlign: "center", marginBottom:'0.5rem' }}>
        Fault History
      </p>

      <div
        className="overflow-y-scroll"
        style={{ height: "520px", borderRadius: "1rem", scrollbarWidth: "none" }}
      >
        {data.map((entry) => (
          <DisplayCard
            key={entry.fault_history_id}
            description={entry.description}
            timestamp={entry.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default FaultHistory;

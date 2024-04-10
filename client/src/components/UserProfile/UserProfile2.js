import { React, useState, useEffect } from "react";
import "./UserProfile2.css";
import Box3 from "./blocks/Box3";
import FaultHistory from "./blocks/UserFaultHistory";
import ServiceHistory from "./blocks/UserServiceHistory";
import CarImage from "./blocks/CarImage";
import DashboardMap from "./blocks/DashboardMap";

const UserProfile2 = (props) => {
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const minWidth = 1024;
      const maxWidth = 1920;
      const zoomFactor = Math.min(
        1,
        Math.max(
          0.9,
          ((screenWidth - minWidth) / (maxWidth - minWidth)) * (1 - 0.9) + 0.9
        )
      );
      setZoom(zoomFactor);
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Run on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [faultDetected, setFaultDetected] = useState(false);

  return (
    <>
      <div className="user-profile-2">
        <div className="user-profile-2-card-1">
          <CarImage />
        </div>
        <div className="user-profile-2-card-1">
          <DashboardMap />
        </div>
        <div className="user-profile-2-card-1">
          <Box3 />
        </div>
        <div className="user-profile-2-card-1">
          {/* <Box4 />
        <div className="box4">
          <div className="cr-graph">
            <CurrentGraph />
          </div>
          <div className="fr-graph">
            <FreqGraph />
          </div>
        </div> */}
          <div className="mf-page-box-4-container">
            <div
              className={`alert-message-container ${
                faultDetected
                  ? "alert-message-container-2"
                  : "alert-message-container-1"
              } block max-w-full p-3 border border-gray-200 rounded-2xl shadow mb-4`}
            >
              <h5
                className="alert-message font-bold tracking-tight text-gray-900"
                style={{ fontSize: "2vh" }}
              >
                {faultDetected
                  ? "Attention: A fault has been detected in the electric vehicle system. Please proceed with caution and consider scheduling maintenance as soon as possible to ensure optimal performance and safety."
                  : "Great news: No faults have been detected in the electric vehicle system! Your vehicle is operating smoothly and efficiently. Remember to continue regular maintenance checks to keep it in top condition."}
              </h5>
            </div>
            <div className="mf-page-box-4">
              <div className="mf-page-card-2">
                <FaultHistory />
              </div>
              <div className="mf-page-card-2">
                <ServiceHistory />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile2;

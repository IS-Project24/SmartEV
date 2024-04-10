import {React, useState, useEffect} from "react";
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
          (screenWidth - minWidth) / (maxWidth - minWidth) * (1 - 0.9) + 0.9
        )
      );
      setZoom(zoomFactor);
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Run on initial render

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
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
        <div className="mf-page-box-4">
          <div className="mf-page-card-2">
            <FaultHistory/>
          </div>
          <div className="mf-page-card-2">
            <ServiceHistory/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile2;

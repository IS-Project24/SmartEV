import {React, useState, useEffect } from "react";
import "./MfPage.css";
import MfCarImg from "./blocks/MfCarImg";
import GraphCurrent from "./blocks/GraphCurrent";
import GraphFreq from "./blocks/GraphFreq";
import Box3 from "../UserProfile/blocks/Box3";
import FaultHistory from "./blocks/FaultHistory";
// import MfBox4 from "./blocks/MfBox4";
import ServiceHistory from "./blocks/ServiceHistory";

const MfPage = () => {
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
    <div className="mf-page" style={{ transform: `scale(${zoom})` }}>
      <div className="mf-page-card-1">
        <MfCarImg />
      </div>
      <div className="mf-page-card-1">
        <div className="box2">
          <div className="mf-graph">
            <GraphCurrent />
          </div>
          <div className="mf-graph">
            <GraphFreq />
          </div>
        </div>
      </div>
      <div className="mf-page-card-1">
        <Box3 />
      </div>
      <div className="mf-page-card-1">
        <div className="mf-page-box-4">
          <div className="mf-page-card-2">
            <FaultHistory />
          </div>
          <div className="mf-page-card-2">
            <ServiceHistory/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MfPage;

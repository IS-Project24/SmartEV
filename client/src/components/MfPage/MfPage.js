import React from "react";
import "./MfPage.css";
import MfCarImg from "./blocks/MfCarImg";
import GraphCurrent from "./blocks/GraphCurrent";
import GraphFreq from "./blocks/GraphFreq";
import Box3 from "../UserProfile/blocks/Box3";
import FaultHistory from "./blocks/FaultHistory";
// import MfBox4 from "./blocks/MfBox4";
import DisplayCard from "./blocks/DisplayCard";
import ServiceHistory from "./blocks/ServiceHistory";

const MfPage = () => {
  return (
    <div className="mf-page">
      <div className="mf-page-card-1">
        <MfCarImg />
      </div>
      <div className="mf-page-card-1">
        <div className="box2">
          <div className="mf-cr-graph">
            <GraphCurrent />
          </div>
          <div className="mf-fr-graph">
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
            {/* <DisplayCard description='Frequency Overloaded' timestamp='Thu, 28 Mar 2024 14:17:03 GMT'/> */}
            {/* <DisplayCard description='Current Overloaded' timestamp='Thu, 28 Mar 2024 14:17:11 GMT'/>
            <DisplayCard description='Current Overloaded' timestamp='Thu, 28 Mar 2024 15:14:26 GMT'/>
            <DisplayCard description='hello' timestamp='hello'/> */}
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

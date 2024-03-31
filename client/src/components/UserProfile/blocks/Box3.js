import React from "react";
import "./Box3.css";
import BatteryComponent from "./BatteryComponent";
import EVHealth from "./EVHealth";
import Temp from "./Temp";
import Humidity from "./Humidity";
// import WeatherData from "./WeatherData";

const Box3 = () => {
  // return (
  //   <div className="user-profile-box3">
  //     <div className="battery-info">
  //       <BatteryComponent />
  //       <div className="evhealth">
  //         <EVHealth healthvalue={80} />
  //       </div>
  //     </div>
  //     <div className="energy-usage">
  //       <WeatherData />
  //       <ChargeHistory/>
  //     </div>
  //   </div>
  // );
  return (
    <div className="box3">
      <div className="box3-card-1">
        <div className="box3-box">
          <BatteryComponent />
        </div>
      </div>
      <div className="box3-card-1 ev1">
        <div className="box3-box">
          <EVHealth healthvalue={80} />
        </div>
      </div>
      <div className="box3-card-1">
        <Temp />
      </div>
      <div className="box3-card-1 ev2">
        <div className="box3-box">
          <EVHealth healthvalue={80} />
        </div>
      </div>
      <div className="box3-card-1">
        <Humidity />
      </div>
    </div>
  );
};

export default Box3;

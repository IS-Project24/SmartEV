import React from "react";
import "./MfCarImg.css";
import carimg from "../../../Media/car5.png";

const MfCarImg = () => {
  return (
    <div className="mf-car-image-box">
      <div className="mf-car-image-box-overlay-text">
        <h6>User</h6>
        {/* <h6>Hello User</h6> */}
        <img src={carimg} />
      </div>
      <div className="mf-car-image">
        <img src={carimg} />
        {/* <h6>Hello User</h6> */}
      </div>
    </div>
  );
};

export default MfCarImg;

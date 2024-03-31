import React from "react";
import "./CarImage.css";
import carimg from "../../../Media/car5.png";

const CarImage = () => {
  return (
    <div className="car-image-box">
      <div className="car-image-box-overlay-text">
        <h6>Hello User</h6>
        {/* <h6>Hello User</h6> */}
        <img src={carimg} />
      </div>
      <div className="car-image">
        <img src={carimg} />
        {/* <h6>Hello User</h6> */}
      </div>
    </div>
  );
};

export default CarImage;

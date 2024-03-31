import React from "react";
import "./UserProfile.css";
import carimg from "../../Media/car5.png";
import BatteryComponent from "./blocks/Battery";
import EVHealth from "./blocks/EVHealth";
import EVHealth2 from "./blocks/EVHealth2";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const UserProfile = () => {
  return (
    <div className="user-profile">
      
      <div className="user-profile-left">
        <img src={carimg} />
      </div>
      <div className="user-profile-right">
        <div className="user-profile-right-top">
          <div className="user-profile-box-1">
            <BatteryComponent />
          </div>
          <div className="user-profile-box-2">
            <div className="battery__card">
              <EVHealth2 healthvalue={65}/>
            </div>
          </div>
        </div>
        <div className="user-profile-right-bottom">
          <div className="user-profile-box-3">
            <div className="battery__card">
              {/* <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                style={{ height: "auto", width: "100px" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer> */}
            </div>
          </div>
          <div className="user-profile-box-4">
            <div className="battery__card"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default UserProfile;

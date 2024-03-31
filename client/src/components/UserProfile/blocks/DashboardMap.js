import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./DashboardMap.css";

const DashboardMap = () => {
    return(
        <div className="dashboard-map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.8971708153213!2d87.30742957589902!3d22.319728379672625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d4404e9413a63%3A0x443d820a3a447f82!2sMain%20Building%2C%20IIT%20Kharagpur%2C%20Kharagpur%2C%20West%20Bengal%20721302!5e0!3m2!1sen!2sin!4v1710244019799!5m2!1sen!2sin"
            allowfullscreen=""
            width="100%"
            height="100%"
            style={{ borderRadius: "16px" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    )
};

export default DashboardMap;
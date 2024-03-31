import React, { useEffect } from "react";
import "./Services.css";

import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    icon: "🔧",
    title: "Scheduled Reports",
    description:
      "Allows users to automatically schedule the delivery of reports at specific intervals to the concerned recipients. Multiple file formats are supported like PDFs, CSV, etc.",
  },
  {
    icon: "🛠️",
    title: "Remote Monitoring & Control",
    description:
      "Obtain real-time data from devices about their performance and also interact with them remotely to detect and resolve issue proactively.",
  },
  {
    icon: "⚙️",
    title: "User Management",
    description:
      "Unique access management feature allows user to manage their level of access based on roles and permissions.",
  },
  {
    icon: "🔧",
    title: "Scheduled Triggers",
    description:
      "Allow robust scheduling of actions to automatically trigger an event on predefined values and anomaly conditions.",
  },
];

function Services() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="services-page">
      <h1 className="services-heading">What do we provide?</h1>
      <div className="row">
        <div className="col1">
          <img
            className="services-side-image"
            src="/Media/services-image.webp"
            alt="Description of the image"
          />
        </div>
        <div className="col2">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-md shadow-md"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <div
                className="service-content-heading"
              >
                <div className="service-icon text-3xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              </div>
              <p className="text-gray-600">{service.description}</p>
              {/* <button className="mt-4 text-blue-500 hover:underline">
              Read More
            </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

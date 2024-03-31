import React from "react";
import "./Adaptiveplatform.css";

import "aos/dist/aos.css";

function Adaptiveplatform() {
  return (
    <div className="Adaptive-platform-page">
      <section className="">
        <div className="py-8 px-16 mx-auto max-w-screen-xl sm:py-16 lg:px-16">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="Adaptive-platform-heading mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              An adpative platform for your IoT initiatives
            </h2>
            <p className="adaptive-subheading-1 text-gray-500 sm:text-xl dark:text-gray-400">
              With powerful built-in features, and intuitive user interface.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div data-aos="fade-up" data-aos-duration="600">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <span className="monitoring-icon material-symbols-outlined">
                  monitoring
                </span>
              </div>
              <h3 className="adaptive-subheading mb-2 text-xl font-bold dark:text-white">
                Analytics and Visualizations
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Forecasting & Actionable insights
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="600">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <span className="material-symbols-outlined">rule_settings</span>
              </div>
              <h3 className="adaptive-subheading mb-2 text-xl font-bold dark:text-white">
                Alerts & Rules Engine
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Automated & Manual role creation & processing
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="600">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <span className="material-symbols-outlined">database</span>
              </div>
              <h3 className="adaptive-subheading mb-2 text-xl font-bold dark:text-white">
                Real-Time & BIG Data
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Device/Sensor/Operational data & information
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="600">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <span className="material-symbols-outlined">satellite</span>
              </div>
              <h3 className="adaptive-subheading mb-2 text-xl font-bold dark:text-white">
                Device/Sensor Configuration & Control
              </h3>
              <p className="text-gray-500 dark:text-gray-400"></p>
            </div>
            <div data-aos="fade-up" data-aos-duration="600">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <span className="material-symbols-outlined">switch_access_2</span>
              </div>
              <h3 className="adaptive-subheading mb-2 text-xl font-bold dark:text-white">
                Application Specific KPI Dashboards/Templates
              </h3>
              <p className="text-gray-500 dark:text-gray-400"></p>
            </div>
            <div data-aos="fade-up" data-aos-duration="600">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <h3 className="adaptive-subheading mb-2 text-xl font-bold dark:text-white">
                Device, User, Service & Product Management
              </h3>
              <p className="text-gray-500 dark:text-gray-400"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Adaptiveplatform;

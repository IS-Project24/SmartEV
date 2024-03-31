import React, { useEffect, useState } from "react";
import "./BatteryComponent.css";

const BatteryComponent = () => {
  const [battery, setBattery] = useState(null);
  const [charging, setCharging] = useState(false);
  const [level, setLevel] = useState(0);
  const [statusText, setStatusText] = useState(
    'Low battery <i class="ri-plug-line"></i>'
  );
  const [batteryLiquidHeight, setBatteryLiquidHeight] = useState("0%");
  const [batteryLiquidClass, setBatteryLiquidClass] =
    useState("gradient-color-red");

  useEffect(() => {
    const initBattery = async () => {
      try {
        const batt = await navigator.getBattery();
        setBattery(batt);
        setCharging(batt.charging);
        setLevel(Math.floor(batt.level * 100));
        updateBatteryStatus(batt.level, batt.charging);
      } catch (error) {
        console.error("Error getting battery info:", error);
      }
    };

    initBattery();
  }, []);

  useEffect(() => {
    if (battery) {
      battery.addEventListener("chargingchange", handleBatteryChange);
      battery.addEventListener("levelchange", handleBatteryChange);
    }

    return () => {
      if (battery) {
        battery.removeEventListener("chargingchange", handleBatteryChange);
        battery.removeEventListener("levelchange", handleBatteryChange);
      }
    };
  }, [battery]);

  const handleBatteryChange = () => {
    setCharging(battery.charging);
    setLevel(Math.floor(battery.level * 100));
    updateBatteryStatus(battery.level, battery.charging);
  };

  const updateBatteryStatus = (charge, isCharging) => {
    charge = 0.85;
    isCharging = true;
    const level = Math.floor(charge * 100);
    setLevel(level);
    setBatteryLiquidHeight(`${parseInt(charge * 100)}%`);

    if (level === 100) {
      setStatusText(
        'Full battery <i class="ri-battery-2-fill green-color"></i>'
      );
      setBatteryLiquidHeight("103%");
    } else if (level <= 20 && !isCharging) {
      setStatusText('Low battery <i class="ri-plug-line animated-red"></i>');
    } else if (isCharging) {
      setStatusText(
        'Charging... <i class="ri-flashlight-line animated-green"></i>'
      );
    } else {
      setStatusText("");
    }

    if (level <= 20) {
      setBatteryLiquidClass("gradient-color-red");
    } else if (level <= 40) {
      setBatteryLiquidClass("gradient-color-orange");
    } else if (level <= 80) {
      setBatteryLiquidClass("gradient-color-yellow");
    } else {
      setBatteryLiquidClass("gradient-color-green");
    }
  };

  return (
    <div className="battery__card">
      <div className="battery__data">
        <p className="battery__text">Battery</p>

        <p
          className="battery__status"
          dangerouslySetInnerHTML={{ __html: statusText }}
        ></p>
        <h1 className="battery__percentage">{level}%</h1>
      </div>
      <div className="battery__pill">
        <div className="battery__level">
          <div
            className={`battery__liquid ${batteryLiquidClass}`}
            style={{ height: batteryLiquidHeight }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BatteryComponent;

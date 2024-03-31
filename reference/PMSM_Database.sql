CREATE DATABASE ev_monitoring;
USE ev_monitoring;

CREATE TABLE users (
	user_id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
	user_type ENUM('Owner', 'Manufacturer') NOT NULL,
    vehicle_id VARCHAR(20) UNIQUE NOT NULL,
    contact_number VARCHAR(20),
    email VARCHAR(255) NOT NULL,
    address VARCHAR(50) NOT NULL
);

CREATE TABLE vehicles (
	vehicle_id VARCHAR(20) PRIMARY KEY,
    user_id INT NOT NULL,
    last_battery_percentage DECIMAL(5,2) DEFAULT 90,
    last_health_status DECIMAL(5,2) DEFAULT 90,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE signals (
    signal_id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_id VARCHAR(20) NOT NULL,
    current_value DECIMAL(8,2) DEFAULT 0,
    temperature_value DECIMAL(5,2) DEFAULT 0,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id)
);

CREATE TABLE fault_types (
fault_type_id INT AUTO_INCREMENT PRIMARY KEY,
fault_name VARCHAR(50) NOT NULL
);

CREATE TABLE fault_history (
fault_history_id INT AUTO_INCREMENT PRIMARY KEY,
vehicle_id VARCHAR(20) NOT NULL,
fault_type_id INT NOT NULL,
description TEXT,
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id),
FOREIGN KEY (fault_type_id) REFERENCES fault_types(fault_type_id)
);

CREATE TABLE service_history (
service_history_id INT AUTO_INCREMENT PRIMARY KEY,
vehicle_id VARCHAR(20) NOT NULL,
description TEXT,
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id)
);

CREATE TABLE statistics (
    statistic_id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_id VARCHAR(20) NOT NULL,
    average_current_value DECIMAL(8,2),
    average_temperature_value DECIMAL(5,2),
    current_value_variance DECIMAL(8,2),
    temperature_value_variance DECIMAL(5,2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id)
);

CREATE TABLE ml_model_parameters (
    model_id INT AUTO_INCREMENT PRIMARY KEY,
    model_name VARCHAR(50) NOT NULL,
    parameter_name VARCHAR(50) NOT NULL,
    parameter_value VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);








USE ev_monitoring;

INSERT INTO users (user_id, username, user_type, vehicle_id, contact_number, email, address)
VALUES
    (1, 'JohnDoe', 'Owner', 'ABC123', '1234567890', 'john.doe@example.com', '123 Main St'),
    (2, 'JaneSmith', 'Manufacturer', 'XYZ456', '9876543210', 'jane.smith@example.com', '456 Oak Ave'),
    (3, 'BobJohnson', 'Owner', 'DEF789', '5551112222', 'bob.johnson@example.com', '789 Pine Rd'),
    (4, 'AliceWilliams', 'Manufacturer', 'GHI123', '8889990000', 'alice.williams@example.com', '987 Maple Ln'),
    (5, 'CharlieBrown', 'Owner', 'JKL456', '3334445555', 'charlie.brown@example.com', '654 Birch Blvd');
    
INSERT INTO vehicles (vehicle_id, user_id, last_battery_percentage, last_health_status)
VALUES
    ('ABC123', 1, 95.5, 92.3),
    ('XYZ456', 1, 89.8, 88.1),
    ('DEF789', 3, 91.2, 90.5),
    ('GHI123', 3, 94.0, 91.8),
    ('JKL456', 5, 92.7, 89.2);

INSERT INTO signals (vehicle_id, current_value, temperature_value)
VALUES
    ('ABC123', 25.5, 30.0),
    ('ABC123', 26.2, 31.5),
    ('ABC123', 24.8, 29.1),
    ('XYZ456', 20.2, 22.5),
    ('XYZ456', 19.8, 23.1);
    
INSERT INTO fault_types (fault_name)
VALUES
    ('Battery Drain'),
    ('Temperature Fluctuation');
    
INSERT INTO fault_history (vehicle_id, fault_type_id, description)
VALUES
    ('ABC123', 1, 'Battery issue detected. Voltage drop observed.'),
    ('XYZ456', 2, 'Temperature fluctuation beyond normal range.'),
    ('DEF789', 1, 'Battery draining faster than expected. Investigating further.');
    
INSERT INTO service_history (vehicle_id, description)
VALUES
    ('ABC123', 'Regular maintenance check. Replaced worn-out brake pads.'),
    ('XYZ456', 'Scheduled battery replacement. Installed new high-capacity battery.'),
    ('DEF789', 'Oil change and engine tune-up.'),
    ('GHI123', 'Diagnostic check for performance optimization.'),
    ('JKL456', 'Completed software update and system recalibration.');




SELECT * from users;
SELECT * from vehicles;
SELECT * from signals;
SELECT * from fault_types;
SELECT * from fault_history;
SELECT * from service_history;

    
INSERT INTO users (user_id, username, user_type, vehicle_id, contact_number, email, address)
VALUES
    (6, 'NewUser', 'Owner', 'MNO789', '1112223333', 'new.user@example.com', '123 Elm St');


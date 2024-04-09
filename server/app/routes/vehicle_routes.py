from flask import jsonify, request
from app import app, db
from app.models.vehicle import Vehicle
import numpy as np
from scipy.stats import norm

def is_outlier(values, threshold=0.05):
    q1, q3 = np.percentile(values, [25, 75])
    iqr = q3 - q1
    lower_bound = q1 - 1.5 * iqr
    upper_bound = q3 + 1.5 * iqr
    return (values < lower_bound) | (values > upper_bound)

# Update battery percentage and health status of a vehicle
@app.route('/vehicles/update', methods=['POST'])
def update_vehicle_data():
    data = request.json
    vehicle_id = data.get('vehicle_id')
    battery_percentage = data.get('battery_percentage')
    health_status = data.get('health_status')

    vehicle = Vehicle.query.filter_by(vehicle_id=vehicle_id).first()
    if not vehicle:
        return jsonify({'error': 'Vehicle not found'}), 404

    if battery_percentage is not None:
        vehicle.last_battery_percentage = battery_percentage
    if health_status is not None:
        vehicle.last_health_status = health_status

    db.session.commit()

    return jsonify({'message': 'Vehicle data updated successfully'})


import requests

@app.route('/vehicles/stats', methods=['GET'])
def get_vehicle_data():
    vehicle_id = request.args.get('vehicleid')
    vehicle = Vehicle.query.filter_by(vehicle_id=vehicle_id).first()
    if not vehicle:
        return jsonify({'message': 'Vehicle not found'}), 404

    # Fetch the latest 5 readings from the '/last/gail/current/5' endpoint
    response = requests.get('http://qts.iitkgp.ac.in/last/gail/current/100')
    readings = response.json()

    # Extract the current and frequency values
    current_values = [reading['current'] for reading in readings]
    freq_values = [reading['freq'] for reading in readings]

    # Check for outliers in current and frequency values
    is_current_outlier = is_outlier(current_values)
    is_freq_outlier = is_outlier(freq_values)

    # Determine the fault status
    is_fault = is_current_outlier.any() or is_freq_outlier.any()
    fault_status = 1 if is_fault else 0

    return jsonify({
        'vehicle_id': vehicle.vehicle_id,
        'last_battery_percentage': vehicle.last_battery_percentage,
        'last_health_status': vehicle.last_health_status,
        'is_fault': fault_status
    })

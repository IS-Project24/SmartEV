from flask import jsonify, request
from app import app, db
from app.models.vehicle import Vehicle

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


# Get battery percentage and health status of a vehicle
@app.route('/vehicles/stats', methods=['GET'])
def get_vehicle_data():
    data = request.json
    vehicle_id = data.get('vehicle_id')
    vehicle = Vehicle.query.filter_by(vehicle_id=vehicle_id).first()
    if not vehicle:
        return jsonify({'message': 'Vehicle not found'}), 404

    return jsonify({
        'vehicle_id': vehicle.vehicle_id,
        'last_battery_percentage': vehicle.last_battery_percentage,
        'last_health_status': vehicle.last_health_status
    })


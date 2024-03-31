from flask import jsonify, request
from app import app, db
from app.models.vehicle import Vehicle
from app.models.faultservice import FaultHistory, ServiceHistory, FaultType

# Add fault history for a vehicle
@app.route('/fault-history/add', methods=['POST'])
def add_fault_history():
    data = request.json
    vehicle_id = data.get('vehicleid')
    fault_type_id = data.get('fault_type_id')
    description = data.get('description')

    vehicle = Vehicle.query.filter_by(vehicle_id=vehicle_id).first()
    if not vehicle:
        return jsonify({'error': 'Vehicle not found'}), 404

    fault_history = FaultHistory(vehicle_id=vehicle_id, fault_type_id=fault_type_id, description=description)
    db.session.add(fault_history)
    db.session.commit()

    return jsonify({'message': 'Fault history added successfully'})

# Get fault history of a vehicle
@app.route('/fault-history/get', methods=['GET'])
def get_fault_history():
    vehicle_id = request.args.get('vehicleid')
    if not vehicle_id:
        return jsonify({'error': 'Missing vehicle_id parameter'}), 400

    vehicle = Vehicle.query.filter_by(vehicle_id=vehicle_id).first()
    if not vehicle:
        return jsonify({'error': 'Vehicle not found'}), 404

    fault_history = FaultHistory.query.filter_by(vehicle_id=vehicle_id).all()
    fault_history_data = []
    for entry in fault_history:
        fault_type = FaultType.query.get(entry.fault_type_id)
        if not fault_type:
            return jsonify({'error': 'Fault type not found for entry {}'.format(entry.fault_history_id)}), 404

        fault_history_data.append({
            'fault_history_id': entry.fault_history_id,
            'vehicle_id': entry.vehicle_id,
            'fault_type_id': entry.fault_type_id,
            'fault_name': fault_type.fault_name,  # Include fault name in response
            'description': entry.description,
            'timestamp': entry.timestamp
        })

    return jsonify({'fault_history': fault_history_data})


# Add service history for a vehicle
@app.route('/service-history/add', methods=['POST'])
def add_service_history():
    data = request.json
    vehicle_id = data.get('vehicleid')
    description = data.get('description')

    vehicle = Vehicle.query.filter_by(vehicle_id=vehicle_id).first()
    if not vehicle:
        return jsonify({'error': 'Vehicle not found'}), 404

    service_history = ServiceHistory(vehicle_id=vehicle_id, description=description)
    db.session.add(service_history)
    db.session.commit()

    return jsonify({'message': 'Service history added successfully'})

@app.route('/service-history/get', methods=['GET'])
def get_service_history():
    vehicle_id = request.args.get('vehicleid')
    if not vehicle_id:
        return jsonify({'error': 'Missing vehicle_id parameter'}), 400

    vehicle = Vehicle.query.filter_by(vehicle_id=vehicle_id).first()
    if not vehicle:
        return jsonify({'error': 'Vehicle not found'}), 404

    service_history = ServiceHistory.query.filter_by(vehicle_id=vehicle_id).all()
    service_history_data = [{
        'service_history_id': entry.service_history_id,
        'vehicle_id': entry.vehicle_id,
        'description': entry.description,
        'timestamp': entry.timestamp
    } for entry in service_history]

    return jsonify({'service_history': service_history_data})
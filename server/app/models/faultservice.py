from app import db

class FaultType(db.Model):
    __tablename__ = 'fault_types'
    fault_type_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    fault_name = db.Column(db.String(255), nullable=False)

def add_dummy_fault_types():
    # Dummy fault types data
    dummy_fault_types_data = [
        {'fault_name': 'Current Related Issue'},
        {'fault_name': 'Frequency Related Issue'},
        {'fault_name': 'Another Fault Type'}
    ]
    
    # Add each dummy fault type to the database
    for fault_data in dummy_fault_types_data:
        new_fault_type = FaultType(**fault_data)
        db.session.add(new_fault_type)
    
    # Commit the changes
    db.session.commit()
    print("Dummy fault types added successfully to the fault_types table!")

    

class FaultHistory(db.Model):
    __tablename__ = 'fault_history'
    fault_history_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    vehicle_id = db.Column(db.String(255), db.ForeignKey('vehicles.vehicle_id'), nullable=False)
    fault_type_id = db.Column(db.Integer, db.ForeignKey('fault_types.fault_type_id'), nullable=False)  # Foreign key for FaultType
    description = db.Column(db.Text)
    timestamp = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp())
    vehicle = db.relationship('Vehicle', backref=db.backref('fault_histories', lazy=True))
    fault_type = db.relationship('FaultType')  # Relationship with FaultType


class ServiceHistory(db.Model):
    __tablename__ = 'service_history'
    service_history_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    vehicle_id = db.Column(db.String(255), db.ForeignKey('vehicles.vehicle_id'), nullable=False)
    description = db.Column(db.Text)
    timestamp = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp())
    vehicle = db.relationship('Vehicle', backref=db.backref('service_histories', lazy=True))

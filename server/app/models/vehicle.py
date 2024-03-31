from app import db

class Vehicle(db.Model):
    __tablename__ = 'vehicles'
    vehicle_id = db.Column(db.String(255), primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    last_battery_percentage = db.Column(db.DECIMAL(5,2), default=90)
    last_health_status = db.Column(db.DECIMAL(5,2), default=90)
    
    # Define relationship to User model
    user = db.relationship('User', backref='vehicles')
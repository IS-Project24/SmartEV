from app import db
from datetime import datetime

class CurrentData(db.Model):
    __tablename__ = 'current_data'
    id = db.Column(db.Integer, primary_key=True)
    current = db.Column(db.Integer)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

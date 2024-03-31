from flask import request, jsonify
from app import app
from app.models.current_data import CurrentData

@app.route('/current-data', methods=['GET'])
def get_current_data():
    current_data = CurrentData.query.order_by(CurrentData.id.desc()).limit(20).all()
    data = [{'current': data.current, 'timestamp': data.timestamp} for data in current_data]
    return jsonify(data)

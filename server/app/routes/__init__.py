from flask import Blueprint

# Import routes from user_routes and current_data_routes
from .user_routes import *
from .current_data_routes import *
from .vehicle_routes import *
from .fault_service_routes import *

# Define a Blueprint for the routes
routes = Blueprint('routes', __name__)

# Register the Blueprint with the app
app.register_blueprint(routes)

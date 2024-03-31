from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from dotenv import load_dotenv
import os
from sqlalchemy import inspect

# Initialize Flask app
app = Flask(__name__)
app.config.from_object('config')
load_dotenv()
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')

# Initialize extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
CORS(app, resources={r"/*": {"origins": "*"}})

from app.routes import *
from app.models import *

# def add_dummy_fault_types():
#     # Dummy fault types data
#     dummy_fault_types_data = [
#         {'fault_name': 'Current Related Issue'},
#         {'fault_name': 'Frequency Related Issue'},
#         {'fault_name': 'Another Fault Type'}
#     ]
    
#     # Add each dummy fault type to the database
#     for fault_data in dummy_fault_types_data:
#         new_fault_type = FaultType(**fault_data)
#         db.session.add(new_fault_type)
    
#     # Commit the changes
#     db.session.commit()
#     print("Dummy fault types added successfully to the fault_types table!")

# Define a function to create all database tables if they don't exist
def create_tables():
    with app.app_context():
        inspector = inspect(db.engine)
        existing_tables = inspector.get_table_names()

        # Check if the 'users' table exists
        if 'users' not in existing_tables:
            User.__table__.create(bind=db.engine) 
            print("User Table created successfully!")
        else:
            print("User Table already exist, skipping creation.")

        if 'vehicles' not in existing_tables:
            Vehicle.__table__.create(bind=db.engine)
            print("Vehicle Table created successfully!")
        else:
            print("Vehicle Table already exist, skipping creation.")

        # Check if the 'fault_types' table exists
        if 'fault_types' not in existing_tables:
            FaultType.__table__.create(bind=db.engine)
            print("Fault Types Table created successfully!")
            add_dummy_fault_types()
        else:
            print("Fault Types Table already exists, skipping creation.")

        # Check if the 'fault_history' table exists
        if 'fault_history' not in existing_tables:
            FaultHistory.__table__.create(bind=db.engine)
            print("Fault History Table created successfully!")
        else:
            print("Fault History Table already exists, skipping creation.")

        # Check if the 'service_history' table exists
        if 'service_history' not in existing_tables:
            ServiceHistory.__table__.create(bind=db.engine)
            print("Service History Table created successfully!")
        else:
            print("Service History Table already exists, skipping creation.")


        
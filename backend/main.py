"""
FastAPI backend for Sensor Dashboard project.
Provides simulated sensor data for temperature, vibration, and pressure.
"""


import random
import time

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd


app = FastAPI()


# Allow React frontend to call the API
app.add_middleware(
    CORSMiddleware,
    # allow_origins=["*"],    # allow all for development
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
  )


@app.get("/api/sensor-data")
def get_sensor_data():
    """
    Simulate sensor readings for temperature, vibration, and pressure.
    """
    data = {
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
        "temperature": round(random.uniform(60, 90), 2),
        "vibration": round(random.uniform(0.1, 1.5), 2),
        "pressure": round(random.uniform(30, 100), 2)
    }
    return data

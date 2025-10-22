import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

export async function getSensorData() {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/sensor-data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching sensor data:", error);
    throw error;
  }
}

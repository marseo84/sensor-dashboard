import { useEffect, useState } from "react";
import { getSensorData } from "./services/api";
import "./App.css";

interface SensorData {
  timestamp: string;
  temperature: number;
  vibration: number;
  pressure: number;
}

function App() {
  const [data, setData] = useState<SensorData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSensorData();
      setData(result);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Sensor Dashboard</h1>
      {data ? (
        <div>
          <p>
            <strong>Timestamp:</strong> {data.timestamp}
          </p>
          <p>
            <strong>Temperature:</strong> {data.temperature.toFixed(2)} °C
          </p>
          <p>
            <strong>Vibration:</strong> {data.vibration.toFixed(2)}
          </p>
          <p>
            <strong>Pressure:</strong> {data.pressure.toFixed(2)} kPa
          </p>
        </div>
      ) : (
        <p>Loading sensor data...</p>
      )}
    </div>
  );
}

export default App;

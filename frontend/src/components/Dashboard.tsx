import { useEffect, useState } from "react";
import { getSensorData } from "../services/api";
import SensorChart from "./SensorChart";
import Gauge from "./Gauge";

interface SensorData {
  timestamp: string;
  temperature: number;
  vibration: number;
  pressure: number;
}

export default function Dashboard() {
  const [history, setHistory] = useState<SensorData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSensorData();
        setHistory((prev) => [...prev.slice(-19), result]);
      } catch {
        console.error("Error fetching sensor data", Error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const timestamps = history.map((d) => d.timestamp);
  const temperatures = history.map((d) => d.temperature);
  const vibrations = history.map((d) => d.vibration);
  const pressures = history.map((d) => d.pressure);

  // latest sensor values for gauges
  const latestData = history[history.length - 1] || {
    temperature: 0,
    vibration: 0,
    pressure: 0,
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Sensor Dashboard</h1>

      {/* Gauges section */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <Gauge
          label="Temperature (°C)"
          value={latestData.temperature}
          min={-20}
          max={100}
        />
        <Gauge
          label="Vibration"
          value={latestData.vibration}
          min={0}
          max={1.5}
        />
        <Gauge
          label="Pressure (kPa)"
          value={latestData.pressure}
          min={30}
          max={100}
        />
      </div>

      {/* Charts section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <SensorChart
          label="Temperature (°C)"
          color="rgb(255, 99, 132)"
          dataPoints={temperatures}
          timestamps={timestamps}
        />
        <SensorChart
          label="Vibration"
          color="rgb(54, 162, 235)"
          dataPoints={vibrations}
          timestamps={timestamps}
        />
        <SensorChart
          label="Pressure (kPa)"
          color="rgb(75, 192, 192)"
          dataPoints={pressures}
          timestamps={timestamps}
        />
      </div>
    </div>
  );
}

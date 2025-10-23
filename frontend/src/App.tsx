import Dashboard from "./components/Dashboard";

function App() {
  return <Dashboard />;
}

// TEST CODE - START
// import { useEffect, useState } from "react";
// import { getSensorData } from "./services/api";
// import SensorChart from "./components/SensorChart";
// import "./App.css";

// interface SensorData {
//   timestamp: string;
//   temperature: number;
//   vibration: number;
//   pressure: number;
// }

// function App() {
//   const [data, setData] = useState<SensorData | null>(null);
//   const [history, setHistory] = useState<SensorData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getSensorData();
//         setData(result);
//         setHistory((prev) => [...prev.slice(-19), result]); // keep last 20 records
//       } catch (error) {
//         console.error("Error fetching sensor data:", error);
//       }
//     };

//     fetchData();
//     const interval = setInterval(fetchData, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const timestamps = history.map((d) => d.timestamp);
//   const temperatureData = history.map((d) => d.temperature);
//   const vibrationData = history.map((d) => d.vibration);
//   const pressureData = history.map((d) => d.pressure);

//   return (
//     <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
//       <h1>Sensor Dashboard</h1>
//       {data ? (
//         // <div>
//         //   <p>
//         //     <strong>Timestamp:</strong> {data.timestamp}
//         //   </p>
//         //   <p>
//         //     <strong>Temperature:</strong> {data.temperature.toFixed(2)} °C
//         //   </p>
//         //   <p>
//         //     <strong>Vibration:</strong> {data.vibration.toFixed(2)}
//         //   </p>
//         //   <p>
//         //     <strong>Pressure:</strong> {data.pressure.toFixed(2)} kPa
//         //   </p>
//         // </div>
//         <>
//           <SensorChart
//             label="Temperature (°C)"
//             dataPoints={temperatureData}
//             timestamps={timestamps}
//             color="rgba(255, 99, 132, 0.5)"
//           />
//           <SensorChart
//             label="Vibration"
//             dataPoints={vibrationData}
//             timestamps={timestamps}
//             color="rgba(54, 162, 235, 0.5)"
//           />
//           <SensorChart
//             label="Pressure (kPa)"
//             dataPoints={pressureData}
//             timestamps={timestamps}
//             color="rgba(75, 192, 192, 0.5)"
//           />
//         </>
//       ) : (
//         <p>Loading sensor data...</p>
//       )}
//     </div>
//   );
// }
// TEST CODE - END

export default App;

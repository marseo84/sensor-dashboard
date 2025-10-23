import React from "react";
import { motion } from "framer-motion";

interface GaugeProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
}

const Gauge: React.FC<GaugeProps> = ({ label, value, min = 0, max = 100 }) => {
  const percentage = (value - min) / (max - min);
  const rotation = -90 + percentage * 100;

  return (
    <div
      style={{
        width: "150px",
        textAlign: "center",
        margin: "1rem",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "50px",
          position: "relative",
          margin: "0 auto",
        }}
      >
        {/* Background semi-circle*/}
        <svg width="100" height="50">
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="10"
          />
        </svg>

        {/* animated needle */}
        <motion.div
          style={{
            width: "2px",
            height: "40px",
            backgroundColor: "#76c7c0",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transformOrigin: "bottom center",
          }}
          animate={{ rotate: rotation }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />

        <p style={{ marginTop: "0.5rem" }}>{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Gauge;

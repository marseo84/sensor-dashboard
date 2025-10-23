import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

interface GaugeProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  size?: number;
}

const Gauge: React.FC<GaugeProps> = ({
  label,
  value,
  min = 0,
  max = 100,
  size = 150,
}) => {
  const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1);
  const radius = size / 2 - 10; // inner radius considering stroke width
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percentage);

  return (
    <div
      style={{
        width: size,
        textAlign: "center",
        margin: "1rem",
      }}
    >
      <svg width={size} height={size / 2}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#e0e0e0"
          strokeWidth={10}
          strokeDasharray={circumference}
          strokeDashoffset={0}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#76c7c0"
          strokeWidth={10}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );

  // V1.0 - simple circular gauge

  // const percentage = (value - min) / (max - min);
  // const rotation = -90 + percentage * 100;

  // return (
  //   <div
  //     style={{
  //       width: size,
  //       textAlign: "center",
  //       margin: "1rem",
  //     }}
  //   >
  //     <div
  //       style={{
  //         width: "100px",
  //         height: "50px",
  //         position: "relative",
  //         margin: "0 auto",
  //       }}
  //     >
  //       {/* Background semi-circle*/}
  //       <svg width="100" height="50">
  //         <path
  //           d="M 10 50 A 40 40 0 0 1 90 50"
  //           fill="none"
  //           stroke="#e0e0e0"
  //           strokeWidth="10"
  //         />
  //       </svg>

  //       {/* animated needle */}
  //       <motion.div
  //         style={{
  //           width: "2px",
  //           height: "40px",
  //           backgroundColor: "#76c7c0",
  //           position: "absolute",
  //           bottom: 0,
  //           left: "50%",
  //           transformOrigin: "bottom center",
  //         }}
  //         animate={{ rotate: rotation }}
  //         transition={{ type: "spring", stiffness: 100, damping: 15 }}
  //       />

  //       <p style={{ marginTop: "0.5rem" }}>{label}</p>
  //       <p>{value}</p>
  //     </div>
  //   </div>
  // );
};

export default Gauge;

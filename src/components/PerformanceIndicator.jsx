import React from "react";
import GaugeBar from "./GaugeBar";

const PerformanceIndicator = ({ className, data, title }) => {
  return (
    <span className={className}>
      <p className="dark:text-white text-slate-800 font-semibold">{title}:</p>
      <GaugeBar
        className="w-full md:w-1/2 h-4 bg-white dark:bg-gray-400 rounded-full"
        value={data}
      />
    </span>
  );
};

export default PerformanceIndicator;

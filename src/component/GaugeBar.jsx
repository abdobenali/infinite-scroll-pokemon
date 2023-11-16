import React from "react";

const GaugeBar = ({ className, value }) => {
  return (
    <div className={className}>
      <div
        className={`flex flex-col items-end justify-center h-4 rounded-full bg-red-500 `}
        style={{ width: `${value}%` }}
      >
        <span className="progress-perc ">{value}%</span>
      </div>
    </div>
  );
};

export default GaugeBar;

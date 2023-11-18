import React from "react";

const Cross = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="white"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default Cross;

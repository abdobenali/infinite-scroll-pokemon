import React from "react";
import pockemonLogo from "../assets/pokemon-logo.png";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

const Main = ({ className }) => {
  return (
    <div className={className}>
      <nav className="sticky w-full top-0 flex  flex-col md:flex-row justify-between items-center    px-10 py-2 bg-gray-300 dark:bg-gray-700">
        <img className="w-32 h-10" src={pockemonLogo} alt="pockemon-logo" />
        <button>
          <Moon
            attributes={{
              fill: "white",
              width: "30px",
              height: "30px",
              viewBox: "-7.5 0 32 32",
            }}
          />
          <Sun
            attributes={{
              fill: "#000000",
              width: "25px",
              height: "25px",
              viewBox: "0 0 24 24",
            }}
          />
        </button>
      </nav>
      <footer className="fixed w-full p-1 bg-gray-300 dark:bg-gray-700  bottom-0 flex justify-center  text-zinc-800 text-sm font-medium dark:text-white">
        Showing 1 to "20" of 2640 results
      </footer>
    </div>
  );
};

export default Main;

import React from "react";
import PerformanceIndicator from "./PerformanceIndicator";

const PokemonDetails = ({ details }) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-around justify-center items-center mb-5 ">
      <div className=" flex items-center   ">
        <img
          className="flex flex-col justify-center items-center h-100 w-100 "
          width={100}
          height={100}
          src={details.imgUrl}
          alt="imgpockemon"
        />
      </div>
      <div className="w-full md:w-1/2 ">
        <h2 className="flex justify-center mb-4 font-medium dark:text-white ">
          Pokemon Details
        </h2>
        <div className="md:border md:border-gray-400 rounded-md p-4 ">
          <div className="flex flex-col   md:flex-row justify-around mb-3  ">
            <span className="flex flex-col items-center justify-center">
              <p className="font-light dark:text-white">{details?.height}M</p>
              <p className="dark:text-white text-slate-800 font-semibold">
                Height
              </p>
            </span>
            <span className="flex flex-col items-center justify-center">
              <p className="font-light dark:text-white">{details?.weight}Kg</p>
              <p className="dark:text-white text-slate-700 font-semibold">
                Weight
              </p>
            </span>
          </div>
          <PerformanceIndicator
            className="dark:text-white flex flex-col md:flex-row justify-between items-center "
            data={details?.hp}
            title="Hp"
          />
          <PerformanceIndicator
            className="dark:text-white flex flex-col md:flex-row justify-between items-center "
            data={details?.attack}
            title="Attack"
          />
          <PerformanceIndicator
            className="dark:text-white flex flex-col md:flex-row justify-between items-center "
            data={details?.defense}
            title="Defense"
          />
          <PerformanceIndicator
            className="dark:text-white flex flex-col md:flex-row justify-between items-center "
            data={details?.speed}
            title="Speed"
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;

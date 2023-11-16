import React from "react";
import { useQuery } from "react-query";

import Pokemonimage from "./PokemonImage";
import Spinner from "./icons/Spinner";
import Cross from "./icons/Cross";
import fetchPokemonDetails from "../PokemonDetails";
import PerformanceIndicator from "./PerformanceIndicator";

const Modal = ({ className, content, onChange }) => {
  const { data, isFetched } = useQuery({
    queryKey: ["pokemon", content],
    queryFn: async () => {
      const pokemonDetails = await fetchPokemonDetails(content.pokemon.url);
      return pokemonDetails;
    },
  });

  const handleCloseModal = () => {
    onChange({ isOpen: false, pokemon: "" });
    document.body.classList = "";
  };
  return (
    <div className={className}>
      <div
        onClick={() => {
          onChange({ isOpen: false, pokemon: "" });
          document.body.classList = "";
        }}
        className="fixed inset-0 backdrop-blur-md  bg-opacity-75 transition-opacity"
      />
      <div className=" fixed top-24 md:top-1/4 left-1/2 transform -translate-x-1/2 inset-0 z-10 bg-gray-300 dark:bg-gray-700  flex flex-col   h-fit  w-1/2  rounded-md ">
        <div className=" flex  justify-end p-5">
          <button
            onClick={handleCloseModal}
            type="button"
            className="backdrop-blur-md rounded-md  text-red-400  hover:bg-red-100 "
          >
            <span className="sr-only">Close</span>
            <Cross className="h-6 w-6 " />
          </button>
        </div>
        <div className="  w-full flex flex-col md:flex-row md:justify-around justify-center items-center mb-5 ">
          <div className=" flex items-center   ">
            {content.pokemon ? (
              <Pokemonimage
                pokemon={content.pokemon}
                height={100}
                width={100}
                className="flex flex-col justify-center items-center h-100 w-100 "
              />
            ) : (
              <Spinner
                className="w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
              />
            )}
          </div>
          {isFetched ? (
            <div className="w-full md:w-1/2 ">
              <h2 className="flex justify-center mb-4 font-medium dark:text-white ">
                Pokemon Details
              </h2>
              <div className="border border-gray-400 rounded-md p-4 ">
                <div className="flex flex-col   md:flex-row justify-around mb-3  ">
                  <span className="flex flex-col items-center justify-center">
                    <p className="font-light dark:text-white">{data.height}M</p>
                    <p className="dark:text-white text-slate-800 font-semibold">
                      Height
                    </p>
                  </span>
                  <span className="flex flex-col items-center justify-center">
                    <p className="font-light dark:text-white">
                      {data.weight}Kg
                    </p>
                    <p className="dark:text-white text-slate-700 font-semibold">
                      Weight
                    </p>
                  </span>
                </div>
                <PerformanceIndicator
                  data={data.hp}
                  className="dark:text-white flex flex-col md:flex-row justify-between items-center "
                  title="Hp"
                />
                <PerformanceIndicator
                  data={data.attack}
                  className="dark:text-white flex flex-col md:flex-row justify-between items-center "
                  title="Attack"
                />
                <PerformanceIndicator
                  data={data.defense}
                  className="dark:text-white flex flex-col md:flex-row justify-between items-center "
                  title="Defense"
                />
                <PerformanceIndicator
                  data={data.speed}
                  className="dark:text-white flex flex-col md:flex-row justify-between items-center "
                  title="Speed"
                />
              </div>
            </div>
          ) : (
            <Spinner className="w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { useQuery } from "react-query";
import Spinner from "../icons/Spinner";

const fetchPokemonImage = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return {
    imgUrl: data.sprites.other.dream_world.front_default,
    weight: data.weight,
    height: data.height,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
  };
};

const PokemonItem = ({ data, onShowPokemonDetails }) => {
  const { data: pokemonDetailsData, isFetched } = useQuery({
    queryKey: ["pokemon", data?.url],
    queryFn: () => fetchPokemonImage(data?.url),
  });

  return (
    <li className="border border-gray-500 basis-1/6 flex flex-col justify-center items-center   rounded-md  p-2 dark:hover:bg-gray-700 hover:bg-gray-300">
      <p className="text-zinc-800 dark:text-white">
        {data?.name?.toUpperCase()}
      </p>
      <span className="h-44 w-40 flex justify-center items-center  ">
        {isFetched ? (
          <img
            width={100}
            height={100}
            src={pokemonDetailsData.imgUrl}
            alt="imgpockemon"
          />
        ) : (
          <Spinner className="w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600" />
        )}
      </span>
      <button
        className="text-white rounded-full bg-green-500 px-3 py-1.5 text-sm font-semibold dark:text-zinc-800 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        onClick={() => {
          if (onShowPokemonDetails) onShowPokemonDetails(pokemonDetailsData);
          document.body.classList.add("overflow-y-hidden");
        }}
      >
        View Pokemon
      </button>
    </li>
  );
};

export default PokemonItem;

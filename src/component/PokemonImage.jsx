import React from "react";
import Spinner from "./icons/Spinner";
import fetchPokemonDetails from "../PokemonDetails";
import { useQuery } from "react-query";

const Pockemonimage = ({ className, pokemon, height, width }) => {
  const { data, isFetched } = useQuery({
    queryKey: ["pokemon", pokemon],
    queryFn: async () => {
      const pokemonDetails = await fetchPokemonDetails(pokemon.url);
      return pokemonDetails;
    },
  });
  return (
    <div className={className}>
      {isFetched ? (
        <img width={width} height={height} src={data.img} alt="imgpockemon" />
      ) : (
        <Spinner className="w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600" />
      )}
    </div>
  );
};

export default Pockemonimage;

import React from "react";
import PokemonItem from "./PokemonItem";

const PokemonList = ({ pokemons, onShowPokemonDetails }) => {
  return (
    <>
      {pokemons?.map((pokemon, index) => {
        return (
          <PokemonItem
            key={pokemon?.name || index}
            data={pokemon}
            onShowPokemonDetails={onShowPokemonDetails}
          />
        );
      })}
    </>
  );
};

export default PokemonList;

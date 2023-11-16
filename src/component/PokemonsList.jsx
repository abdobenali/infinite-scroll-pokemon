import React, { useState } from "react";
import { createPortal } from "react-dom";

import Pokemonimage from "./PokemonImage";
import Modal from "./Modal";

const PokemonsList = ({ pokemons }) => {
  const [modalContent, setModalContent] = useState({
    isOpen: false,
    pokemon: "",
  });

  const handleViewPokemon = (pokemon) => {
    setModalContent({ isOpen: true, pokemon: pokemon });
    document.body.classList.add("overflow-y-hidden");
  };
  return (
    <>
      {modalContent.isOpen
        ? createPortal(
            <Modal
              className="z-10"
              content={modalContent}
              setContent={setModalContent}
            />,
            document.body
          )
        : ""}
      {pokemons.map((pokemon) => {
        return (
          <li
            className="basis-1/6 flex   flex-col justify-center items-center   rounded-md  p-2 dark:hover:bg-gray-700 hover:bg-gray-300"
            key={pokemon.name}
          >
            <p className="text-zinc-800 dark:text-white">
              {pokemon.name.toUpperCase()}
            </p>
            <span className="h-44 w-40 flex justify-center items-center  ">
              <Pokemonimage
                pokemon={pokemon}
                height={100}
                width={100}
                className="flex flex-col justify-center items-center h-100 w-100 "
              />
            </span>
            <button
              onClick={() => {
                handleViewPokemon(pokemon);
              }}
              className="text-white rounded-full bg-green-500 px-3 py-1.5 text-sm font-semibold dark:text-zinc-800 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              View Pokemon
            </button>
          </li>
        );
      })}
    </>
  );
};

export default PokemonsList;

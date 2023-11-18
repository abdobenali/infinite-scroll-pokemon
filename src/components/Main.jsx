import React, { useState, useEffect, useContext } from "react";
import { useInfiniteQuery } from "react-query";
import { ThemeContext } from "../providers/ThemeProvider";
import PokemonList from "./PokemonList";
import Modal from "./Modal";
import PokemonDetails from "./PokemonDetails";
import Sun from "../icons/Sun";
import Moon from "../icons/Moon";
import Spinner from "../icons/Spinner";
import pockemonLogo from "../assets/pokemon-logo.png";

const initialPokemonDetails = {
  imgUrl: "",
  weight: 0,
  height: 0,
  hp: 0,
  attack: 0,
  defense: 0,
  speed: 0,
};

const Main = ({ className }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState(initialPokemonDetails);
  const [numberOfPokemonsShown, setNumberOfPokemonsShown] = useState(20);

  const { isFetched, data, fetchNextPage } = useInfiniteQuery({
    queryFn: async ({
      pageParam = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
    }) => {
      const response = await fetch(pageParam);
      const pokemons = await response.json();
      return pokemons;
    },
    getNextPageParam: (lastPage) => {
      return lastPage.next;
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchNextPage();
        setNumberOfPokemonsShown(numberOfPokemonsShown + 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [numberOfPokemonsShown]);

  return (
    <React.Fragment>
      <div className={className}>
        <nav className="sticky w-full top-0 flex  flex-col md:flex-row justify-between items-center px-10 py-2 bg-gray-300 dark:bg-gray-700">
          <img className="w-32 h-10" src={pockemonLogo} alt="pockemon-logo" />
          <button
            onClick={() => {
              toggleTheme();
            }}
          >
            {theme === "light" ? (
              <Moon width="30px" height="30px" />
            ) : (
              <Sun width="30px" height="30px" />
            )}
          </button>
        </nav>
        <ul className="flex flex-wrap justify-center gap-x-3 gap-y-4 mt-6">
          {isFetched ? (
            data.pages.map((page, index) => {
              return (
                <PokemonList
                  key={index}
                  pokemons={page.results}
                  onShowPokemonDetails={(data) => {
                    setIsModalOpen(true);
                    setPokemonDetails(data);
                  }}
                />
              );
            })
          ) : (
            <span className="flex justify-center items-center h-screen">
              <Spinner className="w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600" />
            </span>
          )}
        </ul>
        <footer className="fixed w-full p-1 bg-gray-300 dark:bg-gray-700  bottom-0 flex justify-center  text-zinc-800 text-sm font-medium dark:text-white">
          Showing 1 to {numberOfPokemonsShown} of 2640 results
        </footer>
      </div>
      {isModalOpen && (
        <Modal
          className="z-10"
          onClose={() => {
            setIsModalOpen(false);
            setPokemonDetails(initialPokemonDetails);
          }}
        >
          <PokemonDetails details={pokemonDetails} />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Main;

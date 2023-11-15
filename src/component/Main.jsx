import React, { useState, useEffect } from "react";
import { useInfiniteQuery } from "react-query";

import pockemonLogo from "../assets/pokemon-logo.png";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
import Spinner from "./icons/Spinner";
import PokemonsList from "./PokemonsList";

const Main = ({ className }) => {
  const [numberOfPokemonsShown, setNumberOfPokemonsShown] = useState(20);
  const {
    isFetched,
    data: pokemons,
    fetchNextPage,
  } = useInfiniteQuery({
    queryFn: async ({
      pageParam = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
    }) => {
      const response = await fetch(pageParam);
      const pokemonsdata = await response.json();
      return pokemonsdata;
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
    <div className={className}>
      <nav className="sticky w-full top-0 flex  flex-col md:flex-row justify-between items-center    px-10 py-2 bg-gray-300 dark:bg-gray-700">
        <img className="w-32 h-10" src={pockemonLogo} alt="pockemon-logo" />
        <button>
          <Moon width="30px" height="30px" />
          <Sun width="25px" height="25px" />
        </button>
      </nav>
      <ul className="flex flex-wrap  justify-center">
        {isFetched ? (
          pokemons.pages.map((page, index) => {
            return <PokemonsList pokemons={page.results} key={index} />;
          })
        ) : (
          <span className="flex justify-center items-center h-screen">
            <Spinner
              className="w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
            />
          </span>
        )}
      </ul>
      <footer className="fixed w-full p-1 bg-gray-300 dark:bg-gray-700  bottom-0 flex justify-center  text-zinc-800 text-sm font-medium dark:text-white">
        Showing 1 to {numberOfPokemonsShown} of 2640 results
      </footer>
    </div>
  );
};

export default Main;

const fetchPokemonDetails = async (pokemon) => {
  const response = await fetch(pokemon);
  const data = await response.json();
  const pokemonDetails = {
    img: data.sprites.other.dream_world.front_default,
    weight: data.weight,
    height: data.height,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
  };
  return pokemonDetails;
};
export default fetchPokemonDetails;

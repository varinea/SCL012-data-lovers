/* Manejo de data */

// esta es una función de ejemplo

import POKEMON from './data/pokemon/pokemon.js'

let stringOfType = function filterPokemonByType(pokemons, types) {
  return POKEMON.filter(pokemon => pokemon.type.includes(types));
};

let stringOfWeak = function filterPokemonByWeakness(pokemons, weak) {
  return POKEMON.filter(pokemon => pokemon.weaknesses.includes(weak));
};

//Función de filtrar por nombre
function filterPokemonByName(pokemons, names) {
  return POKEMON.filter(pokemon => pokemon.name.includes(names));
};

export {stringOfType, stringOfWeak}


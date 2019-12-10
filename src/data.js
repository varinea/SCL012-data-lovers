
import POKEMON from './data/pokemon/pokemon.js'

//Función de filtrar por Tipo
let stringOfType = function filterPokemonByType(types) {
  return POKEMON.filter(pokemon => pokemon.type.includes(types));
};

//Función de filtrar por Debilidades
let stringOfWeak = function filterPokemonByWeakness(weak) {
  return POKEMON.filter(pokemon => pokemon.weaknesses.includes(weak));
};

//Función de filtrar por Nombre
let pokemonByName = function filterPokemonByName(names) {
  return POKEMON.filter(pokemon => pokemon.name.includes(names));
};

export {stringOfType, stringOfWeak, pokemonByName}


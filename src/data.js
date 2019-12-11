
import POKEMON from './data/pokemon/pokemon.js';

// Función de filtrar por Tipo
const stringOfType = function filterPokemonByType(types) {
  return POKEMON.filter(pokemon => pokemon.type.includes(types));
};
console.log(stringOfType)

// Función de filtrar por Debilidades
const stringOfWeak = function filterPokemonByWeakness(weak) {
  return POKEMON.filter(pokemon => pokemon.weaknesses.includes(weak));
};

// Función de filtrar por Nombre
const pokemonByName = function filterPokemonByName(names) {
  return POKEMON.filter(pokemon => pokemon.name.includes(names));
};

export { stringOfType, stringOfWeak, pokemonByName };

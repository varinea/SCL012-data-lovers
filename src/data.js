import POKEMON from './data/pokemon/pokemon.js';

// Función de mapear por nombres
const stringOfName = (newFilter, currentSelect) => {
  return POKEMON.filter((pokemon) => pokemon[newFilter].includes(currentSelect)).map((pokemon) => pokemon.name);
};

// Función de mapear por tipo
const stringOfType = (newFilter, currentSelect) => {
  return POKEMON.filter((pokemon) => pokemon[newFilter].includes(currentSelect)).map((pokemon) => pokemon.type);
};

// Función de mapear por Altura
const stringOfHeight = (newFilter, currentSelect) => {
  return POKEMON.filter((pokemon) => pokemon[newFilter].includes(currentSelect)).map((pokemon) => pokemon.height);
};

// Función de mapear por peso
const stringOfWeight = (newFilter, currentSelect) => {
    return POKEMON.filter((pokemon) => pokemon[newFilter].includes(currentSelect)).map((pokemon) => pokemon.weight);
};

// Función de mapear por Img
const stringOfImg = (newFilter, currentSelect) => {
  return POKEMON.filter((pokemon) => pokemon[newFilter].includes(currentSelect)).map((pokemon) => pokemon.img);
};

// Función de mapear por Candy
const stringOfCandy = (newFilter, currentSelect) => {
  return POKEMON.filter((pokemon) => pokemon[newFilter].includes(currentSelect)).map((pokemon) => pokemon.candy);
};

// Función de mapear por Nº de Candy
const stringOfCandyCount = (newFilter, currentSelect) => {
  return POKEMON.filter((pokemon) => pokemon[newFilter].includes(currentSelect)).map((pokemon) => pokemon.candy_count).map((x) => x !== undefined ? x : 'No aplica');
};

// Función de mapear por Huevos
const stringOfEgg = (newFilter, currentSelect) => {
  return POKEMON.filter((pokemon) => pokemon[newFilter].includes(currentSelect)).map((pokemon) => pokemon.egg).map((x) => x !== 'Not in Eggs' ? x : 'No está en huevos');
};

// Función de mapear por Tiempo de aparición
const stringOfSpawnTime = (newFilter, currentSelect) => {
  return POKEMON.filter((pokemon) => pokemon[newFilter].includes(currentSelect)).map((pokemon) => pokemon.spawn_time);
};

// Función de mapear por Debilidades
const stringOfWeaknesses = (newFilter, currentSelect) => {
    return POKEMON.filter((pokemon) => pokemon[newFilter].includes(currentSelect)).map((pokemon) => pokemon.weaknesses);
};

export { stringOfType, stringOfName, stringOfHeight, stringOfWeight,
  stringOfImg, stringOfCandy, stringOfCandyCount, stringOfEgg,
  stringOfSpawnTime, stringOfWeaknesses };

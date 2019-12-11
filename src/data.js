import POKEMON from './data/pokemon/pokemon.js';

// Función de mapear por nombres
const stringOfName = (newFilter, currentSelect) => {
  if (newFilter === 'type') {
    return POKEMON.filter((pokemon) => pokemon.type.includes(currentSelect)).map((pokemon) => pokemon.name);
  } else if (newFilter === 'weaknesses') {
    return POKEMON.filter((pokemon) => pokemon.weaknesses.includes(currentSelect)).map((pokemon) => pokemon.name);
  } else if (newFilter === 'name') {
    return POKEMON.filter((pokemon) => pokemon.name.includes(currentSelect)).map((pokemon) => pokemon.name);
  } 
};

// Función de mapear por tipo
const stringOfType = (newFilter, currentSelect) => {
  if (newFilter === 'type') {
    return POKEMON.filter((pokemon) => pokemon.type.includes(currentSelect)).map((pokemon) => pokemon.type);
  } else if (newFilter === 'weaknesses') {
    return POKEMON.filter((pokemon)=> pokemon.weaknesses.includes(currentSelect)).map((pokemon) => pokemon.type);
  } else if (newFilter === 'name') {
    return POKEMON.filter((pokemon) => pokemon.name.includes(currentSelect)).map((pokemon) => pokemon.type);
  } 
};

// Función de mapear por Altura
const stringOfHeight = (newFilter, currentSelect) => {
  if (newFilter === 'type') {
    return POKEMON.filter((pokemon) => pokemon.type.includes(currentSelect)).map((pokemon) => pokemon.height);
  } else if (newFilter === 'weaknesses') {
    return POKEMON.filter((pokemon) => pokemon.weaknesses.includes(currentSelect)).map((pokemon) => pokemon.height);
  } else if (newFilter === 'name') {
    return POKEMON.filter((pokemon) => pokemon.name.includes(currentSelect)).map((pokemon) => pokemon.height);
  }
};

// Función de mapear por peso
const stringOfWeight = (newFilter, currentSelect) => {
  if (newFilter === 'type') {
    return POKEMON.filter((pokemon) => pokemon.type.includes(currentSelect)).map((pokemon) => pokemon.weight);
  } else if (newFilter === 'weaknesses') {
    return POKEMON.filter((pokemon) => pokemon.weaknesses.includes(currentSelect)).map((pokemon) => pokemon.weight);
  } else if (newFilter === 'name') {
    return POKEMON.filter((pokemon) => pokemon.name.includes(currentSelect)).map((pokemon) => pokemon.weight);
  }
};

// Función de mapear por Img
const stringOfImg = (newFilter, currentSelect) => {
  if (newFilter === 'type') {
    return POKEMON.filter((pokemon) => pokemon.type.includes(currentSelect)).map((pokemon) => pokemon.img);
  } else if (newFilter === 'weaknesses') {
    return POKEMON.filter((pokemon) => pokemon.weaknesses.includes(currentSelect)).map((pokemon) => pokemon.img);
  } else if (newFilter === 'name') {
    return POKEMON.filter((pokemon) => pokemon.name.includes(currentSelect)).map((pokemon) => pokemon.img);
  }
};

// Función de mapear por Candy
const stringOfCandy = (newFilter, currentSelect) => {
  if (newFilter === 'type') {
    return POKEMON.filter((pokemon) => pokemon.type.includes(currentSelect)).map((pokemon) => pokemon.candy);
  } else if (newFilter === 'weaknesses') {
    return POKEMON.filter((pokemon) => pokemon.weaknesses.includes(currentSelect)).map((pokemon) => pokemon.candy);
  } else if (newFilter === 'name') {
    return POKEMON.filter((pokemon) => pokemon.name.includes(currentSelect)).map((pokemon) => pokemon.candy);
  }
};

// Función de mapear por Nº de Candy
const stringOfCandyCount = (newFilter, currentSelect) => {
  if (newFilter === 'type') {
    return POKEMON.filter((pokemon) => pokemon.type.includes(currentSelect)).map((pokemon) => pokemon.candy_count).map((x) => x !== undefined ? x : 'No aplica');
  } else if (newFilter === 'weaknesses') {
    return POKEMON.filter((pokemon) => pokemon.weaknesses.includes(currentSelect)).map((pokemon) => pokemon.candy_count).map((x) => x !== undefined ? x : 'No aplica');
  } else if (newFilter === 'name') {
    return POKEMON.filter((pokemon) => pokemon.name.includes(currentSelect)).map((pokemon) => pokemon.candy_count).map((x) => x !== undefined ? x : 'No aplica');
  }
};

// Función de mapear por Huevos
const stringOfEgg = (newFilter, currentSelect) => {
  if (newFilter === 'type') {
    return POKEMON.filter((pokemon) => pokemon.type.includes(currentSelect)).map((pokemon) => pokemon.egg).map((x) => x !== 'Not in Eggs' ? x : 'No está en huevos');
  } else if (newFilter === 'weaknesses') {
    return POKEMON.filter((pokemon) => pokemon.weaknesses.includes(currentSelect)).map((pokemon) => pokemon.egg).map((x) => x !== 'Not in Eggs' ? x : 'No está en huevos');
  } else if (newFilter === 'name') {
    return POKEMON.filter((pokemon) => pokemon.name.includes(currentSelect)).map((pokemon) => pokemon.egg).map((x) => x !== 'Not in Eggs' ? x : 'No está en huevos');
  }
};

// Función de mapear por Tiempo de aparición
const stringOfSpawnTime = (newFilter, currentSelect) => {
  if (newFilter === 'type') {
    return POKEMON.filter((pokemon) => pokemon.type.includes(currentSelect)).map((pokemon) => pokemon.spawn_time);
  } else if (newFilter === 'weaknesses') {
    return POKEMON.filter((pokemon) => pokemon.weaknesses.includes(currentSelect)).map((pokemon) => pokemon.spawn_time);
  } else if (newFilter === 'name') {
    return POKEMON.filter((pokemon)=> pokemon.name.includes(currentSelect)).map((pokemon) => pokemon.spawn_time);
  }
};

// Función de mapear por Debilidades
const stringOfWeaknesses = (newFilter, currentSelect) => {
  if (newFilter === 'type') {
    return POKEMON.filter((pokemon) => pokemon.type.includes(currentSelect)).map((pokemon) => pokemon.weaknesses);
  } else if (newFilter === 'weaknesses') {
    return POKEMON.filter((pokemon) => pokemon.weaknesses.includes(currentSelect)).map((pokemon) => pokemon.weaknesses);
  } else if (newFilter === 'name') {
    return POKEMON.filter((pokemon) => pokemon.name.includes(currentSelect)).map((pokemon) => pokemon.weaknesses);
  }
};

export { stringOfType, stringOfName, stringOfHeight, stringOfWeight,
  stringOfImg, stringOfCandy, stringOfCandyCount, stringOfEgg,
  stringOfSpawnTime, stringOfWeaknesses };

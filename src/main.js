import { stringOfType, stringOfWeak, pokemonByName } from '/data.js';

// Select de TIPO
const selectFilterByType = document.getElementById('selectType');

// Select para filtrar por TIPO
selectFilterByType.addEventListener('change', () => {

  document.getElementById('selectWeak').value = ''; // Resetea el otro select para que vuelta a su valor original
  document.getElementById('searchBar').value = ''; // Resetea el input para que se vacíe

  const typeDroplist = document.getElementById('selectType').value; // Valor del droplist de tipo

  // Todas las variables que aparecen en las tarjetas de cada Pokemón
  const stringPokeName = stringOfType(typeDroplist).map(pokemon => pokemon.name);
  const stringPokeType = stringOfType(typeDroplist).map(pokemon => pokemon.type);
  const stringPokeHeight = stringOfType(typeDroplist).map(pokemon => pokemon.height);
  const stringPokeWeight = stringOfType(typeDroplist).map(pokemon => pokemon.weight);
  const stringPokeImg = stringOfType(typeDroplist).map(pokemon => pokemon.img);
  const stringPokeCandy = stringOfType(typeDroplist).map(pokemon => pokemon.candy);
  const stringPokeCandyCount = stringOfType(typeDroplist).map(pokemon => pokemon.candy_count).map(x => x !== undefined ? x : 'No aplica');
  const stringPokeEgg = stringOfType(typeDroplist).map(pokemon => pokemon.egg).map(x => x !== 'Not in Eggs' ? x : 'No está en huevos');
  const stringPokeSpawnTime = stringOfType(typeDroplist).map(pokemon => pokemon.spawn_time);
  const stringPokeWeaknesses = stringOfType(typeDroplist).map(pokemon => pokemon.weaknesses);
  /* let objectPokePrevEvolution = stringOfType(typeDroplist).map(pokemon => pokemon.prev_evolution)
  .map(x => x !== undefined ? x : 'No tiene'); //Mapeo de Pre Evolución */
  /* let stringPokeNextEvolution = stringOfType(typeDroplist).map(pokemon => pokemon.next_evolution)
  .map(x => x !== undefined ? x : 'No tiene'); //Mapeo de Prox Evolución */


  // Borra todos los hijos de Content of Cards antes de imprimir
  const divCard = document.getElementById('contentOfCards');
  while (divCard.hasChildNodes()) {
    divCard.removeChild(divCard.firstChild);
  }

  // Imprime por separado las cartas
  for (let i = 0, len = stringPokeName.length; i < len; i++) {
    const card = document.createElement('div');
    card.classList.add('card-style');
    card.innerHTML = '<img src=\'' + stringPokeImg[i]
                      + '\'><br><h3>' + stringPokeName[i]
                      + '</h3>TIPO: ' + stringPokeType[i]
                      + '<br> <p>ALTURA:</p> ' + stringPokeHeight[i]
                      + '<br> <p>PESO:</p> ' + stringPokeWeight[i]
                      + '<br><br><p class=\'see-more\'>Ver más</p>';
    document.getElementById('contentOfCards').appendChild(card);


    // Creación del div del Modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.getElementById('contentOfCards').appendChild(modal);


    // Creación del contenido del Modal, dentro del div Modal
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = '<div class=\'pokemon-description\'><img src=\'' + stringPokeImg[i]
                            + '\'><br><h3>' + stringPokeName[i]
                            + '</h3>TIPO: ' + stringPokeType[i]
                            + '<br> ALTURA: ' + stringPokeHeight[i]
                            + '<br> PESO: ' + stringPokeWeight[i]
                            + '<br>CANDY: ' + stringPokeCandy[i]
                            + '<br>Nº DE CANDIES PARA EVOLUCIONAR: ' + stringPokeCandyCount[i]
                            + '<br>HUEVO: ' + stringPokeEgg[i]
                            + '<br>HORA DE SPAWNS: ' + stringPokeSpawnTime[i]
                            + '<br>DEBILIDADES: ' + stringPokeWeaknesses[i]
                            // + '<br>EVOLUCIÓN ANTERIOR: ' + objectPokePrevEvolution[i] +
                            // + '<br>PRÓXIMA EVOLUCIÓN: ' + stringPokeNextEvolution[i][0].name +
                            + '</div>';
    modal.appendChild(modalContent);

    // Span del X del modal
    const close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = '&times;';
    modalContent.insertBefore(close, modalContent.childNodes[0]);

    // Función para abrir el modal
    card.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    // Función para cerrar el modal
    close.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});


// Select de DEBILIDADES
const selectFilterByWeak = document.getElementById('selectWeak');

// Select para filtrar por DEBILIDADES
selectFilterByWeak.addEventListener('change', () => {

  document.getElementById('selectType').value = ''; // Resetea el otro select para que vuelta a su valor original
  document.getElementById('searchBar').value = ''; // Resetea el input para que se vacíe

  const weakeDroplist = document.getElementById('selectWeak').value; // Valor del droplist de tipo

  // Todas las variables que aparecen en las tarjetas de cada Pokemón
  const stringPokeName = stringOfWeak(weakeDroplist).map(pokemon => pokemon.name);
  const stringPokeType = stringOfWeak(weakeDroplist).map(pokemon => pokemon.type);
  const stringPokeHeight = stringOfWeak(weakeDroplist).map(pokemon => pokemon.height);
  const stringPokeWeight = stringOfWeak(weakeDroplist).map(pokemon => pokemon.weight);
  const stringPokeImg = stringOfWeak(weakeDroplist).map(pokemon => pokemon.img);
  const stringPokeCandy = stringOfWeak(weakeDroplist).map(pokemon => pokemon.candy);
  const stringPokeCandyCount = stringOfWeak(weakeDroplist).map(pokemon => pokemon.candy_count).map(x => x !== undefined ? x : 'No aplica');
  const stringPokeEgg = stringOfWeak(weakeDroplist).map(pokemon => pokemon.egg).map(x => x !== 'Not in Eggs' ? x : 'No está en huevos');
  const stringPokeSpawnTime = stringOfWeak(weakeDroplist).map(pokemon => pokemon.spawn_time);
  const stringPokeWeaknesses = stringOfWeak(weakeDroplist).map(pokemon => pokemon.weaknesses);

  // Borra todos los hijos de Content of Cards antes de imprimir
  const divCard = document.getElementById('contentOfCards');
  while (divCard.hasChildNodes()) {
    divCard.removeChild(divCard.firstChild);
  }

  // Imprime por separado las cartas
  for (let i = 0, len = stringPokeName.length; i < len; i++) {
    const card = document.createElement('div');
    card.classList.add('card-style');
    card.innerHTML = '<img src=\'' + stringPokeImg[i]
                    + '\'><br><h3>' + stringPokeName[i]
                    + '</h3>TIPO: ' + stringPokeType[i]
                    + '<br> <p>ALTURA:</p> ' + stringPokeHeight[i]
                    + '<br> <p>PESO:</p> ' + stringPokeWeight[i]
                    + '<br><br><p class=\'see-more\'>Ver más</p>';
    document.getElementById('contentOfCards').appendChild(card);

    document.getElementById('contentOfCards').appendChild(card);

    // Creación del div del Modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.getElementById('contentOfCards').appendChild(modal);


    // Creación del contenido del Modal, dentro del div Modal
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = '<div class=\'pokemon-description\'><img src=\'' + stringPokeImg[i]
                            + '\'><br><h3>' + stringPokeName[i]
                            + '</h3>TIPO: ' + stringPokeType[i]
                            + '<br> ALTURA: ' + stringPokeHeight[i]
                            + '<br> PESO: ' + stringPokeWeight[i]
                            + '<br>CANDY: ' + stringPokeCandy[i]
                            + '<br>Nº DE CANDIES PARA EVOLUCIONAR: ' + stringPokeCandyCount[i]
                            + '<br>HUEVO: ' + stringPokeEgg[i]
                            + '<br>HORA DE SPAWNS: ' + stringPokeSpawnTime[i]
                            + '<br>DEBILIDADES: ' + stringPokeWeaknesses[i]
                            // + '<br>EVOLUCIÓN ANTERIOR: ' + objectPokePrevEvolution[i] +
                            // + '<br>PRÓXIMA EVOLUCIÓN: ' + stringPokeNextEvolution[i][0].name +
                            + '</div>';
    modal.appendChild(modalContent);

    // Span del X del modal
    const close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = '&times;';
    modalContent.insertBefore(close, modalContent.childNodes[0]);

    // Función para abrir el modal
    card.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    // Función para cerrar el modal
    close.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});


// Función del Search
document.getElementById('searchBar').addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    document.getElementById('selectType').value = ''; // Resetea los selects para que vuelta a su valor original
    document.getElementById('selectWeak').value = ''; // Resetea los selects para que vuelta a su valor original

    // Valor del input del Search en minúscula
    const inputSearchLowercase = document.getElementById('searchBar').value.toLowerCase();

    // Mayúscula la primera letra de input para poder buscar
    const inputSearch = inputSearchLowercase.charAt(0).toUpperCase() + inputSearchLowercase.slice(1);

    // Todas las variables que aparecen en las tarjetas de cada Pokemón
    const stringPokeName = pokemonByName(inputSearch).map(pokemon => pokemon.name);
    const stringPokeType = pokemonByName(inputSearch).map(pokemon => pokemon.type);
    const stringPokeHeight = pokemonByName(inputSearch).map(pokemon => pokemon.height);
    const stringPokeWeight = pokemonByName(inputSearch).map(pokemon => pokemon.weight);
    const stringPokeImg = pokemonByName(inputSearch).map(pokemon => pokemon.img);
    const stringPokeCandy = pokemonByName(inputSearch).map(pokemon => pokemon.candy);
    const stringPokeCandyCount = pokemonByName(inputSearch).map(pokemon => pokemon.candy_count).map(x => x !== undefined ? x : 'No aplica');
    const stringPokeEgg = pokemonByName(inputSearch).map(pokemon => pokemon.egg).map(x => x !== 'Not in Eggs' ? x : 'No está en huevos');
    const stringPokeSpawnTime = pokemonByName(inputSearch).map(pokemon => pokemon.spawn_time);
    const stringPokeWeaknesses = pokemonByName(inputSearch).map(pokemon => pokemon.weaknesses);

    // Borra todos los hijos de Content of Cards antes de imprimir
    const divCard = document.getElementById('contentOfCards');
    while (divCard.hasChildNodes()) {
      divCard.removeChild(divCard.firstChild);
    }

    // Imprime por separado las cartas
    for (let i = 0, len = stringPokeName.length; i < len; i++) {
      const card = document.createElement('div');
      card.classList.add('card-style');
      card.innerHTML = '<img src=\'' + stringPokeImg[i]
                      + '\'><br><h3>' + stringPokeName[i]
                      + '</h3>TIPO: ' + stringPokeType[i]
                      + '<br> <p>ALTURA:</p> ' + stringPokeHeight[i]
                      + '<br> <p>PESO:</p> ' + stringPokeWeight[i]
                      + '<br><br><p class=\'see-more\'>Ver más</p>';
      document.getElementById('contentOfCards').appendChild(card);


      // Creación del div del Modal
      const modal = document.createElement('div');
      modal.classList.add('modal');
      document.getElementById('contentOfCards').appendChild(modal);


      // Creación del contenido del Modal, dentro del div Modal
      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');
      modalContent.innerHTML = '<div class=\'pokemon-description\'><img src=\'' + stringPokeImg[i]
                              + '\'><br><h3>' + stringPokeName[i]
                              + '</h3>TIPO: ' + stringPokeType[i]
                              + '<br> ALTURA: ' + stringPokeHeight[i]
                              + '<br> PESO: ' + stringPokeWeight[i]
                              + '<br>CANDY: ' + stringPokeCandy[i]
                              + '<br>Nº DE CANDIES PARA EVOLUCIONAR: ' + stringPokeCandyCount[i]
                              + '<br>HUEVO: ' + stringPokeEgg[i]
                              + '<br>HORA DE SPAWNS: ' + stringPokeSpawnTime[i]
                              + '<br>DEBILIDADES: ' + stringPokeWeaknesses[i]
                              // + '<br>EVOLUCIÓN ANTERIOR: ' + objectPokePrevEvolution[i] +
                              // + '<br>PRÓXIMA EVOLUCIÓN: ' + stringPokeNextEvolution[i][0].name +
                              + '</div>';
      modal.appendChild(modalContent);

      // Span del X del modal
      const close = document.createElement('span');
      close.classList.add('close');
      close.innerHTML = '&times;';
      modalContent.insertBefore(close, modalContent.childNodes[0]);

      // Función para abrir el modal
      card.addEventListener('click', () => {
        modal.style.display = 'block';
      });

      // Función para cerrar el modal
      close.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  }
});

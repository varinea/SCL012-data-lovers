import POKEMON from './data/pokemon/pokemon.js'

import {stringOfType, stringOfWeak, pokemonByName} from '/data.js'

console.log(POKEMON[0].name)

console.log(POKEMON[2].prev_evolution[1].name)


  // Select de TIPO
  const selectFilterByType = document.getElementById("selectType")

  // Select para filtrar por TIPO
  selectFilterByType.addEventListener("change", () => {

    document.getElementById("selectWeak").value = ""; // Resetea el otro select para que vuelta a su valor original

    let typeDroplist = document.getElementById("selectType").value; // Valor del droplist de tipo

  // Todas las variables que aparecen en las tarjetas de cada Pokemón
    let stringPokeName = stringOfType(typeDroplist).map(pokemon => pokemon.name);
    let stringPokeType = stringOfType(typeDroplist).map(pokemon => pokemon.type);
    let stringPokeHeight = stringOfType(typeDroplist).map(pokemon => pokemon.height);
    let stringPokeWeight = stringOfType(typeDroplist).map(pokemon => pokemon.weight);
    let stringPokeImg = stringOfType(typeDroplist).map(pokemon => pokemon.img);
    let stringPokeCandy = stringOfType(typeDroplist).map(pokemon => pokemon.candy);
    let stringPokeCandyCount = stringOfType(typeDroplist).map(pokemon => pokemon.candy_count);
    let stringPokeEgg = stringOfType(typeDroplist).map(pokemon => pokemon.egg);
    let stringPokeSpawnTime = stringOfType(typeDroplist).map(pokemon => pokemon.spawn_time);
    let stringPokeWeaknesses = stringOfType(typeDroplist).map(pokemon => pokemon.weaknesses);
    let objectPokePrevEvolution = stringOfType(typeDroplist).map(pokemon => pokemon.prev_evolution); //Mapeo de Pre Evolución
    let stringPokeNextEvolution = stringOfType(typeDroplist).map(pokemon => pokemon.next_evolution); //Mapeo de Prox Evolución

    //Borra todos los hijos de Content of Cards antes de imprimir
    const divCard = document.getElementById("contentOfCards");
    while (divCard.hasChildNodes()) {
      divCard.removeChild(divCard.firstChild);
    };

    //Imprime por separado las cartas
    for (let i = 0, len = stringPokeName.length; i < len; i++) {      
      let card = document.createElement("div");
      card.classList.add("card-style");
      card.innerHTML =  "<img src=\"" + stringPokeImg[i] + 
                        "\"><br><h3>" + stringPokeName[i] + 
                        "</h3>TIPO: " + stringPokeType[i] +
                        "<br> <p>ALTURA:</p> " + stringPokeHeight[i] + 
                        "<br> <p>PESO:</p> " + stringPokeWeight[i] + 
                        "<br><br><p class=\"see-more\">Ver más</p>";
      document.getElementById("contentOfCards").appendChild(card);


      // Creación del div del Modal
      let modal = document.createElement("div");
      modal.classList.add("modal");
      document.getElementById("contentOfCards").appendChild(modal);
      

      // Creación del contenido del Modal, dentro del div Modal
      let modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
      modalContent.innerHTML ="<div class=\"pokemon-description\"><img src=\"" + stringPokeImg[i] + 
                              "\"><br><h3>" + stringPokeName[i] + 
                              "</h3>TIPO: " + stringPokeType[i] + 
                              "<br> ALTURA: " + stringPokeHeight[i] + 
                              "<br> PESO: " + stringPokeWeight[i] + 
                              "<br>CANDY: " + stringPokeCandy[i] + 
                              "<br>Nº DE CANDIES PARA EVOLUCIONAR: " + stringPokeCandyCount[i] + 
                              "<br>HUEVO: " + stringPokeEgg[i] + 
                              "<br>HORA DE SPAWNS: " + stringPokeSpawnTime[i] + 
                              "<br>DEBILIDADES: " + stringPokeWeaknesses[i] + 
                           //   "<br>EVOLUCIÓN ANTERIOR: " + objectPokePrevEvolution[i] + 
                           //   "<br>PRÓXIMA EVOLUCIÓN: " + stringPokeNextEvolution[i] + 
                              "</div>";
      modal.appendChild(modalContent);

      // Span del X del modal
      let close = document.createElement("span");
      close.classList.add("close");
      close.innerHTML = "&times;";
      modalContent.insertBefore(close, modalContent.childNodes[0]);
      
      // Función para abrir el modal
      card.addEventListener("click", () => {
      modal.style.display = "block";
      });

      // Función para cerrar el modal
      close.addEventListener("click", () => {
        modal.style.display = "none";
      });

      }; 
    });

     // Select de DEBILIDADES
  const selectFilterByWeak= document.getElementById("selectWeak")

  // Select para filtrar por DEBILIDADES
  selectFilterByWeak.addEventListener("change", () => {

    document.getElementById("selectType").value = ""; // Resetea el otro select para que vuelta a su valor original

    let weakeDroplist = document.getElementById("selectWeak").value; // Valor del droplist de tipo

  // Todas las variables que aparecen en las tarjetas de cada Pokemón
    let stringPokeName = stringOfWeak(weakeDroplist).map(pokemon => pokemon.name);
    let stringPokeType = stringOfWeak(weakeDroplist).map(pokemon => pokemon.type);
    let stringPokeHeight = stringOfWeak(weakeDroplist).map(pokemon => pokemon.height);
    let stringPokeWeight = stringOfWeak(weakeDroplist).map(pokemon => pokemon.weight);
    let stringPokeImg = stringOfWeak(weakeDroplist).map(pokemon => pokemon.img);
    let stringPokeCandy = stringOfWeak(weakeDroplist).map(pokemon => pokemon.candy);
    let stringPokeCandyCount = stringOfWeak(weakeDroplist).map(pokemon => pokemon.candy_count);
    let stringPokeEgg = stringOfWeak(weakeDroplist).map(pokemon => pokemon.egg);
    let stringPokeSpawnTime = stringOfWeak(weakeDroplist).map(pokemon => pokemon.spawn_time);
    let stringPokeWeaknesses = stringOfWeak(weakeDroplist).map(pokemon => pokemon.weaknesses);
    let objectPokePrevEvolution = stringOfWeak(weakeDroplist).map(pokemon => pokemon.prev_evolution); //Mapeo de Pre Evolución
    let stringPokeNextEvolution = stringOfWeak(weakeDroplist).map(pokemon => pokemon.next_evolution); //Mapeo de Prox Evolución

    //Borra todos los hijos de Content of Cards antes de imprimir
    const divCard = document.getElementById("contentOfCards");
    while (divCard.hasChildNodes()) {
      divCard.removeChild(divCard.firstChild);
    };

    //Imprime por separado las cartas
    for (let i = 0, len = stringPokeName.length; i < len; i++) {      
      let card = document.createElement("div");
      card.classList.add("card-style");
      card.innerHTML = "<img src=\"" + stringPokeImg[i] + 
                        "\"><br><h3>" + stringPokeName[i] + 
                        "</h3>TIPO: " + stringPokeType[i] +
                        "<br> ALTURA: " + stringPokeHeight[i] + 
                        "<br> PESO: " + stringPokeWeight[i] + 
                        "<br><br><p class=\"see-more\">Ver más</p>";
      document.getElementById("contentOfCards").appendChild(card);


      // Creación del div del Modal
      let modal = document.createElement("div");
      modal.classList.add("modal");
      document.getElementById("contentOfCards").appendChild(modal);
      

      // Creación del contenido del Modal, dentro del div Modal
      let modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
      modalContent.innerHTML ="<div class=\"pokemon-description\"><img src=\"" + stringPokeImg[i] + 
                              "\"><br><h3>" + stringPokeName[i] + 
                              "</h3>TIPO: " + stringPokeType[i] + 
                              "<br> ALTURA: " + stringPokeHeight[i] + 
                              "<br> PESO: " + stringPokeWeight[i] + 
                              "<br>CANDY: " + stringPokeCandy[i] + 
                              "<br>Nº DE CANDIES PARA EVOLUCIONAR: " + stringPokeCandyCount[i] + 
                              "<br>HUEVO: " + stringPokeEgg[i] + 
                              "<br>HORA DE SPAWNS: " + stringPokeSpawnTime[i] + 
                              "<br>DEBILIDADES: " + stringPokeWeaknesses[i] + 
                           //   "<br>EVOLUCIÓN ANTERIOR: " + objectPokePrevEvolution[i] + 
                           //   "<br>PRÓXIMA EVOLUCIÓN: " + stringPokeNextEvolution[i] + 
                              "</div>";
      modal.appendChild(modalContent);

      // Span del X del modal
      let close = document.createElement("span");
      close.classList.add("close");
      close.innerHTML = "&times;";
      modalContent.insertBefore(close, modalContent.childNodes[0]);
      
      // Función para abrir el modal
      card.addEventListener("click", () => {
      modal.style.display = "block";
      });

      // Función para cerrar el modal
      close.addEventListener("click", () => {
        modal.style.display = "none";
      });

      }; 
    });



    //Función del Search
    document.getElementById("searchBar").addEventListener("keydown", (e) => {
      if (e.keyCode === 13) { 
        document.getElementById("selectType").value = ""; // Resetea los selects para que vuelta a su valor original
        document.getElementById("selectWeak").value = ""  // Resetea los selects para que vuelta a su valor original

        let inputSearchLowercase = document.getElementById("searchBar").value.toLowerCase(); // Valor del input del Search en minúscula
        let inputSearch = inputSearchLowercase.charAt(0).toUpperCase() +  inputSearchLowercase.slice(1); // Mayúscula la primera letra de input para poder buscar
    
      // Todas las variables que aparecen en las tarjetas de cada Pokemón
        let stringPokeName = pokemonByName(inputSearch).map(pokemon => pokemon.name);
        let stringPokeType = pokemonByName(inputSearch).map(pokemon => pokemon.type);
        let stringPokeHeight = pokemonByName(inputSearch).map(pokemon => pokemon.height);
        let stringPokeWeight = pokemonByName(inputSearch).map(pokemon => pokemon.weight);
        let stringPokeImg = pokemonByName(inputSearch).map(pokemon => pokemon.img);
        let stringPokeCandy = pokemonByName(inputSearch).map(pokemon => pokemon.candy);
        let stringPokeCandyCount = pokemonByName(inputSearch).map(pokemon => pokemon.candy_count);
        let stringPokeEgg = pokemonByName(inputSearch).map(pokemon => pokemon.egg);
        let stringPokeSpawnTime = pokemonByName(inputSearch).map(pokemon => pokemon.spawn_time);
        let stringPokeWeaknesses = pokemonByName(inputSearch).map(pokemon => pokemon.weaknesses);
        let objectPokePrevEvolution = pokemonByName(inputSearch ).map(pokemon => pokemon.prev_evolution); //Mapeo de Pre Evolución
        let stringPokeNextEvolution = pokemonByName(inputSearch).map(pokemon => pokemon.next_evolution); //Mapeo de Prox Evolución
    
        //Borra todos los hijos de Content of Cards antes de imprimir
        const divCard = document.getElementById("contentOfCards");
        while (divCard.hasChildNodes()) {
          divCard.removeChild(divCard.firstChild);
        };
    
        //Imprime por separado las cartas
        for (let i = 0, len = stringPokeName.length; i < len; i++) {      
          let card = document.createElement("div");
          card.classList.add("card-style");
          card.innerHTML = "<img src=\"" + stringPokeImg[i] + 
                            "\"><br><h3>" + stringPokeName[i] + 
                            "</h3>TIPO: " + stringPokeType[i] +
                            "<br> ALTURA: " + stringPokeHeight[i] + 
                            "<br> PESO: " + stringPokeWeight[i] + 
                            "<br><br><p class=\"see-more\">Ver más</p>";
          document.getElementById("contentOfCards").appendChild(card);
    
    
          // Creación del div del Modal
          let modal = document.createElement("div");
          modal.classList.add("modal");
          document.getElementById("contentOfCards").appendChild(modal);
          
    
          // Creación del contenido del Modal, dentro del div Modal
          let modalContent = document.createElement("div");
          modalContent.classList.add("modal-content");
          modalContent.innerHTML ="<div class=\"pokemon-description\"><img src=\"" + stringPokeImg[i] + 
                                  "\"><br><h3>" + stringPokeName[i] + 
                                  "</h3>TIPO: " + stringPokeType[i] + 
                                  "<br> ALTURA: " + stringPokeHeight[i] + 
                                  "<br> PESO: " + stringPokeWeight[i] + 
                                  "<br>CANDY: " + stringPokeCandy[i] + 
                                  "<br>Nº DE CANDIES PARA EVOLUCIONAR: " + stringPokeCandyCount[i] + 
                                  "<br>HUEVO: " + stringPokeEgg[i] + 
                                  "<br>HORA DE SPAWNS: " + stringPokeSpawnTime[i] + 
                                  "<br>DEBILIDADES: " + stringPokeWeaknesses[i] + 
                               //   "<br>EVOLUCIÓN ANTERIOR: " + objectPokePrevEvolution[i] + 
                               //   "<br>PRÓXIMA EVOLUCIÓN: " + stringPokeNextEvolution[i] + 
                                  "</div>";
          modal.appendChild(modalContent);
    
          // Span del X del modal
          let close = document.createElement("span");
          close.classList.add("close");
          close.innerHTML = "&times;";
          modalContent.insertBefore(close, modalContent.childNodes[0]);
          
          // Función para abrir el modal
          card.addEventListener("click", () => {
          modal.style.display = "block";
          });
    
          // Función para cerrar el modal
          close.addEventListener("click", () => {
            modal.style.display = "none";
          });
    
        }; 
      };
    });

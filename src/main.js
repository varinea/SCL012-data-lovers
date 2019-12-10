
import POKEMON from './data/pokemon/pokemon.js'

console.log(POKEMON[0].name)

console.log(POKEMON[1].prev_evolution[0].name)

//Función de filtrar por tipo
let stringOfType = function filterPokemonByType(pokemons, types) {
  return POKEMON.filter(pokemon => pokemon.type.includes(types));
};


//Función de filtrar por nombre
function filterPokemonByName(pokemons, names) {
    return POKEMON.filter(pokemon => pokemon.name.includes(names));
};


//Función del Input y su botón
  let actionFilterByName = document.getElementById("filterTypeButton");

  actionFilterByName.addEventListener("click", () => {
    let nameSelected = document.getElementById("typePoke").value
    document.getElementById("test").innerHTML = filterPokemonByName(POKEMON, nameSelected).map(pokemon => pokemon.name);
});

  //DropList
  const selectFilterByType = document.getElementById("selectType")


  // Botón para filtrar
  selectFilterByType.addEventListener("change", () => {

    let typeDroplist = document.getElementById("selectType").value; // Valor del droplist de tipo

  // Todas las variables que aparecen en las tarjetas de cada Pokemón
    let stringPokeName = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.name);
    let stringPokeType = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.type);
    let stringPokeHeight = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.height);
    let stringPokeWeight = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.weight);
    let stringPokeImg = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.img);
    let stringPokeCandy = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.candy);
    let stringPokeCandyCount = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.candy_count);
    let stringPokeEgg = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.egg);
    let stringPokeSpawnTime = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.spawn_time);
    let stringPokeWeaknesses = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.weaknesses);
    let objectPokePrevEvolution = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.prev_evolution); //Mapeo de Pre Evolución
    let stringPokeNextEvolution = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.next_evolution); //Mapeo de Prox Evolución


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

      //Esto todavía no sirve
      // When the user clicks anywhere outside of the modal, close it
  /*    modal.addEventListener("click", () => {
        modal.style.display = "none";
      }); */



      }; 
    });

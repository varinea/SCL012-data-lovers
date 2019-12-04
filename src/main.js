
import POKEMON from './data/pokemon/pokemon.js'

console.log(POKEMON[0].name)

console.log(POKEMON[0].type)

console.log(POKEMON.length)


//Función de filtrar por tipo

let stringOfType = function filterPokemonByType(pokemons, types) {
  return POKEMON.filter(pokemon => pokemon.type.includes(types));
};

//Función de filtrar por nombre
function filterPokemonByName(pokemons, names) {
    return POKEMON.filter(pokemon => pokemon.name.includes(names));
};


//Input
  let actionFilterByName = document.getElementById("filterTypeButton");

  actionFilterByName.addEventListener("click", () => {
    let nameSelected = document.getElementById("typePoke").value
    document.getElementById("test").innerHTML = filterPokemonByName(POKEMON, nameSelected).map(pokemon => pokemon.name);
});

  //DropList
  let actionFilterByType = document.getElementById("filterTypeButton2");



  actionFilterByType.addEventListener("click", () => {
    let typeDroplist = document.getElementById("select1").value;
    let stringPokeName = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.name);
    let stringPokeType = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.type);
    let stringPokeHeight = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.height);
    let stringPokeWeight = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.weight);
    let stringPokeImg = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.img);
    console.log(stringPokeName)
    const divCard = document.getElementById("contentOfCards");
    while (divCard.hasChildNodes()) {
      divCard.removeChild(divCard.firstChild);
    };
    for (let i = 0, len = stringPokeName.length; i < len; i++) {
      let card = document.createElement("p");
      card.classList.add('card-style');
      card.innerHTML = "<img src=\"" + stringPokeImg[i] + "\"> <br>" + stringPokeName[i] + "<br><br> TIPO: " + stringPokeType[i] + "<br> ALTURA: " + stringPokeHeight[i] + "<br> PESO: " + stringPokeWeight[i];
      document.getElementById("contentOfCards").appendChild(card);
    };
  });
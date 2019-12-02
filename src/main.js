
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
}


//Input
  let actionFilterByName = document.getElementById("filterTypeButton");

  actionFilterByName.addEventListener("click", () => {
    let nameSelected = document.getElementById("typePoke").value
    document.getElementById("test").innerHTML = filterPokemonByName(POKEMON, nameSelected).map(pokemon => pokemon.name);
});

  //DropList
  let actionFilterByType2 = document.getElementById("filterTypeButton2");



<<<<<<< HEAD

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
let dropAction = document.getElementById("drop");

dropAction.addEventListener("click", () => {
    document.getElementById("myDropdown").classList.toggle("show");
}
);

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
=======
  actionFilterByType2.addEventListener("click", () => {
    let typeDroplist = document.getElementById("select1").value;
    let stringPokeType = stringOfType(POKEMON, typeDroplist).map(pokemon => pokemon.name);
    
    for (let i = 0, len = stringPokeType.length; i < len; i++) {
      let card = document.createElement("p");
      card.innerHTML = stringPokeType[i];
      document.getElementById("contentOfCards").appendChild(card);
    };
  });
>>>>>>> 38f5c719b77f194a65bc382cbf72834be8d9b3ae

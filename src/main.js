console.log("Hola")

import POKEMON from './data/pokemon/pokemon.js'

console.log(POKEMON[0].name)

console.log(POKEMON[0].type)

console.log(POKEMON.length)


//Función de filtrar por tipo
function filterPokemonByType(pokemons, types) {
    return POKEMON.filter(pokemon => pokemon.type.includes(types));
}

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

  actionFilterByType2.addEventListener("click", () => {
      let typeDroplist = document.getElementById("select1").value;
      document.getElementById("test").innerHTML = filterPokemonByType(POKEMON, typeDroplist).map(pokemon => pokemon.name);
  });

  //DropList lindo
  let actionFilterByType3 = document.getElementById("drop");

  actionFilterByType3.addEventListener("click", () => {
      let typeDropButton = document.getElementById("myDropdown").value;
      document.getElementById("test").innerHTML = filterPokemonByType(POKEMON, typeDropButton).map(pokemon => pokemon.name);
  });


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

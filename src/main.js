//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
import { filterByRegion , filterByType} from './data.js';
// console.log(data)

// ESTA FUNCION CREA LAS TARJETAS DE CADA POKEMON DESDE JS ${pokemon.img}
function createCard(pokemon) {
  let card = `
    <div class="pokemon-card">
      <img src="${pokemon.img}" alt="">
      <div class="circulo"></div>
      <h5 class="pokemon-id">${pokemon.num}</h5>
      <h5 class="pokemon-nombre">${pokemon.name}</h5>
      <h5 class="tipo">${pokemon.type}</h5>
    </div>
  `;
  return card;
}

// ESTA FUNCION COLOCA INFORMACION DE CADA POKEMON
function setCards(pokemones) {
  let containerCards = document.getElementById('contenedor-pokemon');
  let emptyCard = '';
  pokemones.forEach(poke => emptyCard += createCard(poke));
  containerCards.innerHTML = emptyCard;
}

setCards(data.pokemon);  // parametro

//Botones de filtrado por Región "Kanto y Johto"
let pokemonRegion = document.querySelectorAll('.region'); //variable para llamar a todos los elementos con esa clase (los botones)
for(let i=0; i< pokemonRegion.length; i++){ //para iterar sobre los valores de esos elementos y saber que son 2 botones distintos
  pokemonRegion[i].addEventListener('click',()=>{ // desde el index va a aplicar la función click
    let filterRegion= filterByRegion(pokemonRegion[i].id); //llama la funcion de manipulación de array importada y la aplique desde el index tomando el id como punto para match
    // console.log(filterRegion)
    setCards(filterRegion);
  });
}

//botones filtrado por tipos de Pokémon
let pokemonType= document.querySelectorAll('.types'); //variable para llamar a todos los elementos con esa clase (los botones)
for(let i=0; i< pokemonType.length; i++){ //para iterar sobre los valores de esos elementos y saber que son 2 botones distintos
  pokemonType[i].addEventListener('click',()=>{ // desde el index va a aplicar la función click
    let filterType= filterByType(pokemonType[i].id); //llama la funcion de manipulación de array importada y la aplique desde el index tomando el id como punto para match
    console.log(filterType);
    setCards(filterType);
  });
}


// export let pokemonKanto = 2 + 2;
// console.log(pokemonKanto);
// export let uno = ${pokemon.name};
// tarea: domContentLoaded
// tarea: window.addEventListener


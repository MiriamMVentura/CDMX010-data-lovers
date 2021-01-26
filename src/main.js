//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

import { filterByRegion } from './data.js';

// ESTA FUNCION CREA LAS TARJETAS DE CADA POKEMON DESDE JS ${pokemon.img}
export function createCard(pokemon) {
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

// ESTA FUNCION COLOCA INFORMACION DE CADA POKEMON DESDE JS
function setCards(pokemones) { //recibe un argumento
  let containerCards = document.getElementById('contenedor-pokemon');
  let emptyCard = '';
  pokemones.forEach(poke => emptyCard += createCard(poke));

  containerCards.innerHTML = emptyCard;
}

setCards(data.pokemon);// parametro

// tarea: domContentLoaded
// tarea: window.addEventListener

//tarea refactorizar esta sección para hacer un solo modulo de codigo
let btnKanto = document.querySelector('.regionKanto'); //selecciono el boton kanto
btnKanto.addEventListener ('click',function () {
  const pokemonsKanto = filterByRegion('kanto'); //funcion para el filtrado de kanto
  setCards(pokemonsKanto);//pintar esa funcion en la pantalla con sus tarjetas
})


let btnJohto = document.querySelector('.regionJohto');
btnJohto.addEventListener ('click',function () {
  const pokemonsJohto = filterByRegion('johto'); //funcion para el filtrado de johto
  setCards(pokemonsJohto);
})


// tarea: domContentLoaded
// tarea: window.addEventListener

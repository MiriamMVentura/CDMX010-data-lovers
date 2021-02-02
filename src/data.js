import data from './data/pokemon/pokemon.js';

export const filterByRegion = (region) => {
  const pokemons = data.pokemon.filter(item =>{
    return item.generation.name === region;
  });
  return pokemons;
};

export const filterByType = (type) => {
  const filterType = data.pokemon.filter(poke=>{
    return poke.type.includes(type)});
    console.log(filterType);
  return filterType;
};

// export function filtrarTipoFuego () {
//   const typeFire = data.pokemon.filter(fuego => fuego.type.includes('fire'));
//   return typeFire;
// }
// console.log(filtrarTipoFuego);

// export function filterByType = (type) => {
//   const typesPokemon = data.pokemon.filter( =>{

//   } plant.type[0] === 'grass');
//   return typeGrass;
// }
// console.log(filtrarTipoPlanta);


// export function filtrarTipoPlanta () {
//   const typeGrass1 = data.pokemon.filter(plant => plant.type[0] === 'grass');
//   /*const typeGrass2 = data.pokemon.filter(planta => planta.type[1] === ‘grass’);*/
//   return typeGrass1/*, typeGrass2*/;
// }
// console.log(filtrarTipoPlanta);

// PLANTILLAS
// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

// import data from ‘./data/pokemon/pokemon.js’//

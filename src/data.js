import data from './data/pokemon/pokemon.js';


export const filterByRegion = (region) => {
  const pokemons = data.pokemon.filter(item =>{
    return item.generation.name === region;
  });
  return pokemons;
};



// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };


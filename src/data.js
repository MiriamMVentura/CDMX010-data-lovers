import data from './data/pokemon/pokemon.js';

export const filterByRegion = (region) => {
  const pokemons = data.pokemon.filter(item =>{
    return item.generation.name === region;
  });
  // console.log(filterByRegion)
  return pokemons;
};

export const filterByType = (type) => {
  const filterType = data.pokemon.filter(poke=>{
    return poke.type.includes(type)
  });
    // console.log(filterType);
  return filterType;
};


export function a(){
  const sortBy = data.pokemon.sort((a,b)=> b.num - a.num);
  console.log(sortBy);
  return sortBy;
}
console.log(a);
export function b(){
  const sortByB = data.pokemon.sort((a,b)=> a.num - b.num);
  console.log(sortByB);
  return sortByB;
}
console.log(b);

export const sortPokemonName = () => {
  const sortByName = data.pokemon.sort((prev,next)=>{
    if (prev.name > next.name){
      return 1;
    }
    if (prev.name <  next.name){
      return -1;
    }
    return 0;
  });
  console.log(sortPokemonName)
  return sortByName
};

export const sortPokemonName2 = () => {
  const sortByName2 = data.pokemon.sort((prev,next)=>{
    if (prev.name > next.name){
      return -1;
    }
    if (prev.name <  next.name){
      return 1;
    }
    return 0;
  });
  console.log(sortPokemonName2)
  return sortByName2
};





// export function  sortPokemonName(){
//   const sortName = data.pokemon.sort ((prev,next) =>
//   prev.name -next.name);
//   return sortName
// }

// PLANTILLAS
// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

// import data from ‘./data/pokemon/pokemon.js’//

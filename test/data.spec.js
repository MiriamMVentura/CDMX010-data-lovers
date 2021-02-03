import { filterByRegion, filterByType } from '../src/data.js';

describe('filterByRegion', () => {
  it('is a function', () => {
    expect(typeof filterByRegion).toBe('function');
  });

  it('returns an array of kanto pokemons when the provided filter is kanto', () => {
    const kanto = filterByRegion('kanto')
    expect(kanto.length).toBe(151);
  });

  it('returns an array of kanto pokemons when the provided filter is johto', () => {
    const johto = filterByRegion('johto')
    expect(johto.length).toBe(100);
  });
});

describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('returns an array of grass pokemons when the provided filter is grass', () => {
    const pokemons = filterByType('grass')
    expect(pokemons.length).toBe(24);
  });

  it('returns an array of  pokemons when the provided filter is dark', () => {
    const dark = filterByType('dark')
    expect(dark.length).toBe(6);
  });
});

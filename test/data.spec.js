/*import { example, anotherExample } from '../src/data.js';

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/

import { filterByRegion } from '../src/data.js';

describe('filterByRegion', () => {
  it('is a function', () => {
    expect(typeof filterByRegion).toBe('function');
  });

  it('returns `an array of objects`', () => {
    expect(typeof filterByRegion([])).toBe('object');
  });
});


// describe('filtrarTipoPlanta', () => {
//   it('is a function', () => {
//     expect(typeof filtrarTipoPlanta).toBe('function');
//   });

//   it('returns `un pokemon de tipo planta`', () => {
//     expect(typeof filtrarTipoPlanta()).toBe('paras');
//   });
// });

// it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
//   expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
// });

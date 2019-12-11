// importamos la función `example`
import { stringOfType, stringOfWeak, pokemonByName } from '../src/data.js';
// import POKEMON from '../src/data/pokemon/pokemon.js';

describe('Data', () => {

  it('stringOfType debería ser una función', () => {
    expect(typeof stringOfType).toBe('function');
  });

  it('stringOfWeak debería ser una función', () => {
    expect(typeof stringOfWeak).toBe('function');
  });

  it('pokemonByName debería ser una función', () => {
    expect(typeof pokemonByName).toBe('function');
  });

});

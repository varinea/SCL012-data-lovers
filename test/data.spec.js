// importamos la función `example`
import { stringOfType, stringOfName, stringOfHeight, stringOfWeight,
  stringOfImg, stringOfCandy, stringOfCandyCount, stringOfEgg,
  stringOfSpawnTime, stringOfWeaknesses } from '../src/data.js';
// import POKEMON from '../src/data/pokemon/pokemon.js';

describe('data', () => {

  it('stringOfName debería ser una función', () => {
    expect(typeof stringOfName).toBe('function');
  });

  it('stringOfType con weaknesses y parámetro Fairy debería devolver "Bulbasaur", "Ivysaur", "Venusaur", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Bellsprout", "Weepinbell", "Victreebel", "Exeggcute", "Exeggutor", "Tangela"', () => {
    expect(stringOfName('type','Grass')).toStrictEqual(["Bulbasaur", "Ivysaur", "Venusaur", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Bellsprout", "Weepinbell", "Victreebel", "Exeggcute", "Exeggutor", "Tangela"]);
  });

  it('stringOfType debería ser una función', () => {
    expect(typeof stringOfType).toBe('function');
  });

  it('stringOfName con type y parámetro Grass debería devolver ["Fighting"], ["Fighting"], ["Water", "Fighting"], ["Fighting"], ["Fighting"], ["Fighting"], ["Fighting"], ["Fighting"], ["Dragon"], ["Dragon"], ["Dragon", "Flying"]', () => {
    expect(stringOfType('weaknesses','Fairy')).toStrictEqual([["Fighting"], ["Fighting"], ["Water", "Fighting"], ["Fighting"], ["Fighting"], ["Fighting"], ["Fighting"], ["Fighting"], ["Dragon"], ["Dragon"], ["Dragon", "Flying"]]);
  });

  it('stringOfWeight debería ser una función', () => {
    expect(typeof stringOfWeight).toBe('function');
  });




  it('stringOfHeight debería ser una función', () => {
    expect(typeof stringOfHeight).toBe('function');
  });

});

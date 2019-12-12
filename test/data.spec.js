// importamos la función `example`
import { stringOfType, stringOfName, stringOfHeight, stringOfWeight,
  stringOfImg, stringOfCandy, stringOfCandyCount, stringOfEgg,
  stringOfSpawnTime, stringOfWeaknesses } from '../src/data.js';
// import POKEMON from '../src/data/pokemon/pokemon.js';

describe('data', () => {

  it('stringOfName debería ser una función', () => {
    expect(typeof stringOfName).toBe('function');
  });

  it('stringOfName con weaknesses y Fairy como parámetro debería devolver ["Bulbasaur", "Ivysaur", "Venusaur", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Bellsprout", "Weepinbell", "Victreebel", "Exeggcute", "Exeggutor", "Tangela"]', () => {
    expect(stringOfName('type','Grass')).toStrictEqual(["Bulbasaur", "Ivysaur", "Venusaur", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Bellsprout", "Weepinbell", "Victreebel", "Exeggcute", "Exeggutor", "Tangela"]);
  });

  it('stringOfType debería ser una función', () => {
    expect(typeof stringOfType).toBe('function');
  });

  it('stringOfType con type y Grass como parámetro debería devolver [["Fighting"], ["Fighting"], ["Water", "Fighting"], ["Fighting"], ["Fighting"], ["Fighting"], ["Fighting"], ["Fighting"], ["Dragon"], ["Dragon"], ["Dragon", "Flying"]]', () => {
    expect(stringOfType('weaknesses','Fairy')).toStrictEqual([["Fighting"], ["Fighting"], ["Water", "Fighting"], ["Fighting"], ["Fighting"], ["Fighting"], ["Fighting"], ["Fighting"], ["Dragon"], ["Dragon"], ["Dragon", "Flying"]]);
  });

  it('stringOfHeight debería ser una función', () => {
    expect(typeof stringOfHeight).toBe('function');
  });

  it('stringOfHeight con name y Charmander como parámetro debería devolver  ["0.61 m"]', () => {
    expect(stringOfHeight('name','Charmander')).toStrictEqual(["0.61 m"]);
  });

  it('stringOfWeight debería ser una función', () => {
    expect(typeof stringOfWeight).toBe('function');
  });

  it('stringOfWeight con type y Dragon como parámetro debería devolver ["3.3 kg", "16.5 kg", "210.0 kg"]', () => {
    expect(stringOfWeight('type','Dragon')).toStrictEqual(["3.3 kg", "16.5 kg", "210.0 kg"]);
  });

  it('stringOfImg debería ser una función', () => {
    expect(typeof stringOfImg).toBe('function');
  });

  it('stringOfImg con name y Pikachu como parámetro debería devolver ["http://www.serebii.net/pokemongo/pokemon/025.png"]', () => {
    expect(stringOfImg('name','Pikachu')).toStrictEqual(["http://www.serebii.net/pokemongo/pokemon/025.png"]);
  });
  
  it('stringOfCandy debería ser una función', () => {
    expect(typeof stringOfCandy).toBe('function');
  });

  it('stringOfCandy con name y Squirtle como parámetro debería devolver ["Squirtle Candy"]', () => {
    expect(stringOfCandy('name','Squirtle')).toStrictEqual(["Squirtle Candy"]);
  });

  it('stringOfCandyCount debería ser una función', () => {
    expect(typeof stringOfCandyCount).toBe('function');
  });

  it('stringOfCandyCount con weaknesses y Steel como parámetro debería devolver [25, 100, "No aplica", "No aplica", 50, "No aplica", "No aplica", "No aplica", "No aplica"]', () => {
    expect(stringOfCandyCount('weaknesses','Steel')).toStrictEqual([25, 100, "No aplica", "No aplica", 50, "No aplica", "No aplica", "No aplica", "No aplica"]);
  });

  it('stringOfEgg debería ser una función', () => {
    expect(typeof stringOfEgg).toBe('function');
  });

  it('stringOfEgg con type y Ice como parámetro debería devolver ["No está en huevos", "No está en huevos", "10 km", "10 km", "No está en huevos"]', () => {
    expect(stringOfEgg('type','Ice')).toStrictEqual(["No está en huevos", "No está en huevos", "10 km", "10 km", "No está en huevos"]);
  });

  it('stringOfSpawnTime debería ser una función', () => {
    expect(typeof stringOfSpawnTime).toBe('function');
  });

  it('stringOfSpawnTime con name y Meowth como parámetro debería devolver ["02:54"]', () => {
    expect(stringOfSpawnTime('name','Meowth')).toStrictEqual(["02:54"]);
  });

  it('stringOfWeaknesses debería ser una función', () => {
    expect(typeof stringOfWeaknesses).toBe('function');
  });

  it('stringOfWeaknesses con name y Rattata como parámetro debería devolver [["Fighting"]]', () => {
    expect(stringOfWeaknesses('name','Rattata')).toStrictEqual([["Fighting"]]);
  });

});

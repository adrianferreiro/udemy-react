import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un héroe por ID', () => {
      const id = 1;
      const hero = getHeroeById(id);
      expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });
    test('getHeroeById debe retornar undefined si no existe', () => {
      const id = 100;
      const hero = getHeroeById(id);
      expect(hero).toBeFalsy();
      
    });

    test('getHeroesByOwner debe retornar héroes de DC - length 3', () => {
      const owner = 'DC';
      const arrayHeroesDC = [
        { id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }
      ];
      const heroe = getHeroesByOwner(owner);
      expect(heroe).toEqual(arrayHeroesDC);
      expect(heroe.length).toBe(3);
    });

    test('getHeroesByOwner debe retornar héroes de Marvel - length 2', () => {
        const owner = 'Marvel';
        console.log(owner);
        const arrayHeroesMarvel = [
          { id: 2, name: 'Spiderman', owner: 'Marvel' },
          { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ];
        const heroes = getHeroesByOwner(owner);
        expect(heroes).toEqual(arrayHeroesMarvel);
        expect(heroes.length).toBe(2);
      });
    
});

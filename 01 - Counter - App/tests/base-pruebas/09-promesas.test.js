import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Prueba de 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un héroe.', (done) => {
      const id = 1;
      getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
      });
      
    });
    
    //ahora manejamos la excepción
    test('getHeroeByIdAsync debe retornar error si el héroe no existe.', (done) => {
      const id = 100;
      getHeroeByIdAsync(id).catch(error =>{
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
        done();
      });
       
      
    });
    
  
})

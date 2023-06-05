import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
    test('usContext debe devolver un objeto', () => {
        const edad = 34;
        const clave = '1234';
        const nombre = 'Adrian';

        const testUsContext = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        const context = usContext(clave, nombre, edad, '');
        expect(testUsContext).toEqual(context);
    })
  
})

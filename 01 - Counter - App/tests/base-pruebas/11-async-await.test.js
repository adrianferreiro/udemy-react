import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Prueba de 11-async-await', () => {
  test('getImagen debe retornar url', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
  })
  
})

describe('<Pruebas en <DemoComponent/>', () => {
    test('Esta prueba no debe fallar', () => {
        
        //1) inicialización
        const mensaje1 = 'Hola mundo';
        //2) estímulo
        const mensaje2 = mensaje1.trim();
        //3) Aserciones - Observar el comportamiento
        expect(mensaje1).toBe(mensaje2);
    });
});


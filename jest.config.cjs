module.exports = {
    //jsdom
    testEnvironment: 'jest-environment-jsdom',
    //cargamos el archivo jest.setup.js que se va a ejecutar cuando inician las pruebas.
    setupFiles: ['./jest.setup.js']
}
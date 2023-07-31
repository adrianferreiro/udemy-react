import axios from 'axios';

//axios.create me ayuda a crear una confirugación standar
//que me va a dejar de repetir el código una y otra vez con fetch
export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
}) 
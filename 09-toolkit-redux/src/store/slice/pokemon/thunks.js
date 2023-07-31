//todos los thunks de pokemos, peticiones para hacer posteos, obtener pokemones, etc

import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons =( page = 0 ) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        //TODO: petición http
        
        
        //dispatch( setPokemons() );
    }
}
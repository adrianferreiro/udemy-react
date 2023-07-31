import { createSlice } from '@reduxjs/toolkit';

//THUNK: es una acción asíncrona que dispara otra acción en nuestro reducer

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            console.log(action);
        }
    }
});
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
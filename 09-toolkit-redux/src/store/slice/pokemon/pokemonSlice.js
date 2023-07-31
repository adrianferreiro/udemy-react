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
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
            // {
            //     page: 1,
            //     pokemnos: []
            // }

        }
    }
});
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
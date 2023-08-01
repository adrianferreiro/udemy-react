import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slice/counter';
import { pokemonSlice } from './slice/pokemon';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
    },
});

//store: está toda la información que podemos acceder desde cualquier componente
//usamos dos hooks para interactuar con nuestro store
//useSelector: seleccionamos el estado que queremos ocupar
//useDispatch: para despachar acciones
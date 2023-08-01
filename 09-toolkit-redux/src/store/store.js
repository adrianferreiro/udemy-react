import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slice/counter';
import { pokemonSlice } from './slice/pokemon';
import { todosApi } from './apis/todosApi';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,

        //usamos corchetes para decir que es una propiedad computada
        //esto es el espacio en el que vamos a colocar los resultados de las query
        [todosApi.reducerPath]: todosApi.reducer,
    },
    //un middleware es una función que se ejecuta antes que otra
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( todosApi.middleware )
});

//store: está toda la información que podemos acceder desde cualquier componente
//usamos dos hooks para interactuar con nuestro store
//useSelector: seleccionamos el estado que queremos ocupar
//useDispatch: para despachar acciones
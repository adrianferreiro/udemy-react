import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { PokemonApp } from './PokemonApp.jsx'
import { TodoApp } from './TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Creamos el archivo store.js y envolvemos nuestra app en provider importado de react-redux
  // El provider espera el parámetro store y le pasamos el que creamos
  // Creamos los Slices: 
  // Slice: es una función que recibe un objeto, ese objeto tiene nombre, estado inicial y reducers
  <React.StrictMode>
    <Provider store={store} >
      {/* <App /> */}
      {/* <PokemonApp/> */}
      <TodoApp/>
    </Provider>
  </React.StrictMode>,
)

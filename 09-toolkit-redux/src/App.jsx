import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment, incrementBy , decrement } from './store/slice/counter';

function App() {

  //useSelector es un callback que tiene como primer argunmento el state y regreso del state la información que me interesa
  const { counter } = useSelector(state => state.counter); //toma el valor del counter que tengo en el store
  //toma el objeto completo del counter que puede tener muchos valores y desestructura el counter de counterSlice.js.
  const dispatch = useDispatch(); //para despachar las acciones. En éste ejemplo en el click

  // Instalamos los paquetes para REDUX
  // npm install @reduxjs/toolkit
  // npm install react-redux

  //snippet para el cascarón de Slice
  //ctrl + shift + P
  //cmd + shift + P
  //buscamos user snippets
  // "Crear un Slice de Redux": {
	// 	"prefix": "redux-slice",
	// 	"body": [
	// 		"import { createSlice } from '@reduxjs/toolkit';",
	// 		"",
	// 		"export const ${1:template}Slice = createSlice({",
	// 		"    name: '${1:template}',",
	// 		"    initialState: {",
	// 		"        counter: 10",
	// 		"    },",
	// 		"    reducers: {",
	// 		"        increment: (state, /* action */ ) => {",
	// 		"            state.counter += 1;",
	// 		"        },",
	// 		"    }",
	// 		"});",


	// 		"export const { increment } = ${1:template}Slice.actions;"
	// 	],
	// 	"description": "Crear un Slice de Redux"
	// }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() ) }>
          Increment
        </button>  
        <button onClick={() => dispatch( decrement() ) }>
          Decrement
        </button>  
        {/* en el ACTION pasamos el payload que puede ser un valor o un objeto */}
        <button onClick={() => dispatch( incrementBy(2) ) }>
          Increment by 2
        </button>  
      </div>
    </>
  )
}

export default App

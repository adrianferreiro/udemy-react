import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment } from './store/slice/counter';

function App() {

  //useSelector es un callback que tiene como primer argunmento el state y regreso del state la información que me interesa
  const { counter } = useSelector(state => state.counter); //toma el valor del counter que tengo en el store
  //toma el objeto completo del counter que puede tener muchos valores y desestructura el counter de counterSlice.js.
  const dispatch = useDispatch(); //para despachar las acciones. En éste ejemplo en el click

  // Instalamos los paquetes para REDUX
  // npm install @reduxjs/toolkit
  // npm install react-redux
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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() ) }>
          count is {counter}
        </button>  
      </div>
    </>
  )
}

export default App

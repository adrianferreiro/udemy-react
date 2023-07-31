import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "./store/slice/pokemon";

export const PokemonApp = () => {

  const dispatch = useDispatch(); //usamos para disparar cualquier acción, no importa de que store

  useEffect(() => {
    dispatch( getPokemons() );
  
  }, [])
  
  

  return (
    <>
        <h1>PomemonApp</h1>
        <hr />

        <ul>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
        </ul>
    
    </>
   )
}

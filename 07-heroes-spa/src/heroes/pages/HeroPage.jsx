import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  // con el hook useParams podemos desestructurar y leer el parámetro
  // que pusimos como comodin en HeroesRoutes.jsx
  const { id } = useParams();

  const hero = getHeroById(id);

  if(!hero){
    //es una ruta errónea que no devuelve ningún héroe .. entonces redireccionamos
    return <Navigate to="/marvel" />
  }

  return (
    <>
      <h1> {hero.superhero} </h1>
    </>
  )
}

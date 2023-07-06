import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

  // con el hook useParams podemos desestructurar y leer el parámetro
  // que pusimos como comodin en HeroesRoutes.jsx
  const { id } = useParams();

  //este es un componente que se puede volver a redibujar así que vamos a usar un useMemo
  //se puede redibujar por ej por un cambio en el componente padre que randeriza éste elemento
  //entonces tenemos que ver siempre que cuando llamamos una función directamente, memorizar sus valores
  //o memorizar las funciones en caso de considerarlo necesario
  //useMemo para memorizar valores - useCallback para memorizar funciones
  const hero = useMemo( ()=> getHeroById( id ), [ id ]);//se dispara solamente si cambia el valor del id

  const navigate = useNavigate();

  const onNavigateBack = ()=> {
    navigate(-1);//volver
  }

  if(!hero){
    //es una ruta errónea que no devuelve ningún héroe .. entonces redireccionamos
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft" >
      <div className="col-4">
          <img 
            src={`/assets/heroes/${ id }.jpg`}
            alt={ hero.superhero }
            className="img-thumbnail"
          />
      </div>

      <div className="col-8">
        <h3> {hero.superhero} </h3>
        <ul className="list-group list-group-flush" >
          <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
          <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
          <li className="list-group-item"> <b>First appearance:</b> {hero.first_appearance} </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p> {hero.characters} </p>

        <button 
          className="btn btn-outline-primary" 
          onClick={onNavigateBack}
        >
          Regresar
        </button>

      </div>
    </div>
  )
}

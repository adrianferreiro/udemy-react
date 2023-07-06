import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { useMemo } from "react";

export const HeroList = ({publisher}) => {

    //si getHeroesbyPublisher recibe más de un argunmento, por ej (publisher, id) entonces
    //el segundo parámetero de useMemo es una arreglo de los mismos [publisher, id]
    const heroes = useMemo(()=> getHeroesByPublisher(publisher), [publisher]);
    console.log(heroes);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        heroes.map(hero => (
          <HeroCard 
            key={hero.id}
            {...hero}
          />
        ))
      }
    </div>

  )
}

import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);
    console.log(heroes);
  return (
    <ul>
      {
        heroes.map(hero => (
          <li key={hero.id}>
            {hero.superhero}
          </li>
        ))
      }
    </ul>

  )
}

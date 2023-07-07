import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
    name = name.toLocaleLowerCase().trim();
    if(name.length === 0) return [];//no tenemos nombre

    //importamos de data "heroes"
    //usamos el filter para comparar con el name enviado por el usuario para la búsqueda
    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( name )
    )

}
import { heroes } from "../data/heroes"

export const getHeroById = (id) =>{
    //pasamos el id y buscamos en el array para mostrar el detalle del héroe
    //si existe el héroe mustra los datos .. o sino regresa undefined
    return heroes.find( hero => hero.id === id );  

}
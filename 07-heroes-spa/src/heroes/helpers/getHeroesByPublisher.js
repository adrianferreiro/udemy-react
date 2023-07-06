
import {heroes} from '../data/heroes';

export const getHeroesByPublisher = ( publisher) => {

    //validamos que el publisher que viene por argumento sea válido
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} no es válido`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher );
}
import { useLocation, useNavigate } from "react-router-dom";
import  queryString from 'query-string';
import { useForm } from "../../hooks/useForm"; 
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  //usamos useLocation para obtener los parámetros de la query
  //para ver hacemos consolelog de {location}
  //con location obtenemos la información de la localización en la que nos encontramos
  const location = useLocation();
  // console.log({location});

  //instalamos -- npm install query-string
  // const query = queryString.parse(location.search); 
  //si hacemos un console log podemos ver como separa los parámetros enviados por la url
  // console.log(query);
  const {q= ''} = queryString.parse(location.search);

  //vamos a realizar la búsqueda una vez que tenemos los query parameters
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q // le asignamos el parámetro envíado para que no se borre cuando realizamos la búsqueda
  });

  const onSearchSubmit = (event)=>{
    event.preventDefault(); //para evitar que haga un full refresh
    if(searchText.trim().length <= 1) return
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Sarching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} >
            <input
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">
                Search
            </button>

          </form>
        </div>

        <div className="col-7">
            <h4>Result</h4>
            <hr />

            <div className="alert alert-primary" >
                Search a hero 
            </div>

            <div className="alert alert-danger" >
                No hero with <b> {q} </b> 
            </div>

            {
              heroes.map( hero => (
                <HeroCard key={hero.id}  {...hero} /> 
                 
              ) )
            }

        </div>
      </div>

    </>
  )
}

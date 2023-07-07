import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"

export const SearchPage = () => {

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (event)=>{
    event.preventDefault(); //para evitar que haga un full refresh
    if(searchText.trim().length <= 1) return
    console.log({searchText});
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
                No hero with <b>ABC</b> 
            </div>

            {/* <HeroCard/> */}
        </div>
      </div>

    </>
  )
}

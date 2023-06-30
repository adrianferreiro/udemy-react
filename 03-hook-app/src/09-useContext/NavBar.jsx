import { Link, NavLink } from "react-router-dom"

// Usamos navLink en la barra de navegación o cuando necesitamos que el link reacciones
//basado en la ruta en que se encuentra

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to={'/'}>useContext</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <NavLink
              className={'nav-link'}
              to={'/'}
            >
              Home
            </NavLink> */}
            <NavLink
              // className={(args) => {
              //   console.log(args);
              //   return 'nav-link'
              // }} acá podemos ver que en los args nos devuelve si está activo o no
              className={({isActive}) => `nav-link  ${isActive ? 'active text-warning' : 'text-white'}`}
              to={'/'}
              >
              Home
            </NavLink>
            
            <NavLink
              className={({isActive}) => `nav-link  ${isActive ? 'active text-warning' : 'text-white'}`}
              to={'/about'}
              >
              About
            </NavLink>
            
            <NavLink
              className={({isActive}) => `nav-link  ${isActive ? 'active text-warning' : 'text-white'}`}
              to={'/login'}
              >
              Login
            </NavLink>
           
          </ul>
        </div>
      </div>
    </nav>
  )
}

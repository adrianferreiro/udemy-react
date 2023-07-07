import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    //solo los hooks que vienen de react son llamados hooks, los de terceros son customHooks
    const navigate = useNavigate();//custom hook

    const onLogout = ()=> {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-link  ${isActive ? 'active text-warning' : 'text-white'}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-link  ${isActive ? 'active text-warning' : 'text-white'}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-link  ${isActive ? 'active text-warning' : 'text-white'}`} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Adrian Ferreiro
                    </span>
                    <button 
                        onClick={onLogout}
                        className='nav-item nav-link btn' 
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
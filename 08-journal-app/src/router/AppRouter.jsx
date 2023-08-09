import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { useDispatch, useSelector } from "react-redux"
import { CheckingAuth } from "../ui/"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { useEffect } from "react"
import { login, logout } from "../store/auth/authSlice"

export const AppRouter = () => {

  const { status } = useSelector( state => state.auth );

  //hacemos el dispatch para hacer el login del user que obtenemos en onAuthStateChanged
  const dispatch = useDispatch();

  //tengo que disparar un efecto que automáticamente revise si la persona está autenticada o no
  useEffect(() => {
    
    //firebase nos ofrece una opcion para estar pendientes de los cambios del usuario
    //se dispara cada vez que el estado de autenticación cambia ((OBSERVER))
    onAuthStateChanged( FirebaseAuth, async ( user ) => {
        // console.log(user);
        if( !user ) return dispatch( logout() );
        //puedo mandar el user completo y va a ocupar lo que necesita
        //pero en éste ejemplo vamos a desetructurar
        const { uid, email, displayName, photoURL } = user;

        //si tengo un usuario entonces login
        dispatch( login({
            uid, email, displayName, photoURL
        }) );

    });
  
    //saco el return porque no voy a necesitar hacer ninguna limpieza
    //porque nuestro approuter siempre va a estar pendiente de la autenticación
    // return () => {
    //   second
    // }
  // }, [third]) //saco porque no voy a necesitar ninguna dependencia
  }, [])
  

   if( status === 'checking' ){
      return <CheckingAuth/> 
   }

  return (
    <Routes>
        {/* rutas privadas y publicas */}
        {
          (status === 'authenticated')
          // si estoy autenticado solamente van a existir las rutas de JournalRoutes ino la de Authroutes
          ? <Route path="/*" element={<JournalRoutes/>} />
          : <Route path="/auth/*" element={ <AuthRoutes/> } /> 
        }

        {/* ruta adicional que vamos a usar por defectp */}
        {/* la ruta de login solamente va a existir si el usuario no está autenticado */}
        <Route path="/*" element={ <Navigate to='/auth/login'  /> } /> 

        {/* Login y Registro */}
        {/* cualquier ruta que arranque con /auth va a mostrar el elemento AuthRoutes */}
        {/* // <Route path="/auth/*" element={ <AuthRoutes/> } />  */}
        
        {/* Jorunal - App */}
        {/* // <Route path="/*" element={<JournalRoutes/>} />  */}

    </Routes>
  )
}

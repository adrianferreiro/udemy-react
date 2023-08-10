import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/"
import { useCheckAuth } from "../hooks"

export const AppRouter = () => {

    const status = useCheckAuth();
  

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

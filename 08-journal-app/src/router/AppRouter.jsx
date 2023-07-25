import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y Registro */}
        {/* cualquier ruta que arranque con /auth va a mostrar el elemento AuthRoutes */}
        <Route path="/auth/*" element={ <AuthRoutes/> } /> 
        
        {/* Jorunal - App */}
        <Route path="/*" element={<JournalRoutes/>} /> 

    </Routes>
  )
}

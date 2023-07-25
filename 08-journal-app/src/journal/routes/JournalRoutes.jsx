import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"

export const JournalRoutes = () => {
  return (
        <Routes>

            <Route path="/" element={ <JournalPage/> }  />

            {/* cualquier otra ruta me va a navegar al slash */}
            <Route path="/*" element={ <Navigate to="/" /> }  />

        </Routes>
   )
}

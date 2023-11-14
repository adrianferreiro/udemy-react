import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"
import EmpresaPage from "../pages/EmpresaPage"

export const JournalRoutes = () => {
  return (
        <Routes>

            {/* <Route path="/" element={ <JournalPage/> }  /> */}
            <Route path="/" element={ <EmpresaPage/> }  />

            {/* cualquier otra ruta me va a navegar al slash */}
            <Route path="/*" element={ <Navigate to="/" /> }  />

        </Routes>
   )
}

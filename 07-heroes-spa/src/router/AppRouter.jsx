import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage/>} />
            {/* creamos una ruta que me lleve a la ruta de heroes */}
            <Route path="/*" element={<HeroesRoutes/>} />
        </Routes>

    </>
    )
}

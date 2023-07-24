import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/login" element={
                <PublicRoute>
                    {/* <Route path="login" element={<LoginPage/>} /> */}
                    <LoginPage/>
                </PublicRoute>
            }>
            </Route>
            {/* creamos una ruta que me lleve a la ruta de heroes */}
            <Route path="/*" element={
                <PrivateRoute>
                    <HeroesRoutes/>
                </PrivateRoute>
            } />
            <Route path="/*" element={<HeroesRoutes/>} />
        </Routes>

    </>
    )
}

import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage/>} />
                <Route path="dc" element={<DcPage/>} />
                
                <Route path="search" element={<SearchPage/>} />
                {/* el "id" que pasamos a la url está en el contexto ya que usamos el hook useParams de react-router-dom en HeroPage*/}
                {/* depende del nombre que le ponesmos acá .. es como voy a obtener cuando quiero leer la url */}
                <Route path="hero/:id" element={<HeroPage/>} />


                <Route path="/" element={<Navigate to={"marvel"} />} />
            </Routes>
        </div>

    </>
    )
}

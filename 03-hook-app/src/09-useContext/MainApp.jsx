import {Route, Routes, Navigate} from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'

export const MainApp = () => {
  return (
    <>
        <NavBar/>
        <hr />
        <Routes>
            <Route path='/' element={<HomePage/>}  />
            <Route path='login' element={<LoginPage/>} />
            <Route path='about' element={<AboutPage/>} />
            {/* <Route path='/*' element={<LoginPage/>}  /> */}
            {/*---------------      path='/*' para un 404  ----------------------*/}
            {/* pero es mas comun usar el navigation */}
            <Route path='/*' element={<Navigate to='login' />} />
        </Routes>
    </>
    )
}

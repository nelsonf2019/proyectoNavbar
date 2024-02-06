import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"


//así podemos manejar nuestras ruta de layout
export const RouterLayout =()=>{
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
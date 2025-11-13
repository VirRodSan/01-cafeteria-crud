import Header from "./Header/Header"
import Spacer from "./Spacer/Spacer"
import Body from "./Body/Body"
import Footer from "./Footer/Footer"
import { useState } from "react"

export default function Contenedor({categorias}){
    const [stateCategoria, setCategorias] = useState(categorias)
    
    return(
        <>
            <Header setCategorias={setCategorias}/>
            <Spacer/>
            <Body categorias ={stateCategoria} setCategorias={setCategorias}/>
            <Spacer/>
            <Footer/>
        </>
    )
}
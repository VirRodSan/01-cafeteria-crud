import Header from "./Header/Header"
import Spacer from "./Spacer/Spacer"
import Body from "./Body/Body"
import Footer from "./Footer/Footer"

export default function Contenedor({categorias}){
    return(
        <>
            <Header/>
            <Spacer/>
            <Body categorias ={categorias}/>
            <Spacer/>
            <Footer/>
        </>
    )
}
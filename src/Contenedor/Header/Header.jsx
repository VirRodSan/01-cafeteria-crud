import InsertarCategoria from '../Body/Categorias/InsertarCategoria'
import './Header.css'

export default function Header({setCategorias}){
    return(
        <header>
            <h1>CAMPER CAFE</h1> 
            <p>Est. 2020</p>
            <InsertarCategoria
                setCategorias={setCategorias}
            />
        </header>
    )
}
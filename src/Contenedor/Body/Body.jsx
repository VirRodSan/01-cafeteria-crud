import Categorias from "./Categorias/Categorias"

export default function Body({categorias}){

    const listaCategorias = categorias.menu.map(categoria => 
        <Categorias
            key = {categoria.idCategoria}
            nameCategoria = {categoria.nameCategoria}
            imgCategoria = {categoria.imgCategoria}
            arrayProductos = {categoria.products}
        />
    
    )

    return (
        <section className="categoria">
                    
            {listaCategorias}
       
        </section>
    )
    
}
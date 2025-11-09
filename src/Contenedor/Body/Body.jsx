import Categorias from "./Categorias/Categorias"

export default function Body({categorias, setCategorias}){

    console.log('Categorias en Body: ', categorias.menu)
    const listaCategorias = categorias.menu.map(categoria => 
        <Categorias
            key = {categoria.idCategoria}
            idCategoria = {categoria.idCategoria}
            nameCategoria = {categoria.nameCategoria}
            imgCategoria = {categoria.imgCategoria}
            arrayProductos = {categoria.products}
            categorias = {categorias}
            setCategorias = {setCategorias}
            
        />
    
    )

    return (
        <section className="categoria">
                    
            {listaCategorias}
       
        </section>
    )
    
}
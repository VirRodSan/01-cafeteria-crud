import Producto from "./Productos/Producto"
import InsertarCategoria from "./InsertarCategoria.jsx"
import { Trash2, Pencil, Plus } from 'lucide-react'
import { useState } from "react"


export default function Categorias({
    idCategoria,
    nameCategoria,
    imgCategoria,
    arrayProductos,
    categorias,
    setCategorias}) {

    const[mostrarInsertar,setMostrarInsertar]=useState(false)

    const manejarProductoEliminado = (idProductoAEliminar, idCategoriaOrigen) => {
        setCategorias(prev => ({
            ...prev,
            menu: prev.menu.map(categoria => {
                if (categoria.idCategoria === idCategoriaOrigen) {
                    return {
                        ...categoria,
                        products: categoria.products.filter(producto => producto.idProduct !== idProductoAEliminar)
                    }
                }
                return categoria
            })
        }))
    }

    const manejarProductoInsertado = (idCategoriaDestino, nuevoProducto) => {
        setCategorias(prev => ({
            ...prev,
            menu: prev.menu.map(categoria => {
                if (categoria.idCategoria === idCategoriaDestino) {
                    return {
                        ...categoria,
                        products: [...categoria.products, nuevoProducto]
                    }
                }
                return categoria
            })
        }))
    }

    const listaProductos = arrayProductos.map(producto =>
        <Producto 
            key = {producto.idProduct}
            idProducto={producto.idProduct}
            nombreProducto = {producto.name}
            precioProducto = {producto.price}
            idCategoria={idCategoria}
            arrayProductos={arrayProductos}
            onProductoEliminado={manejarProductoEliminado}  
            onProductoInsertado={manejarProductoInsertado} 
        />
    )

    const EliminarCategoria = (idEliminar) => {
        setCategorias(preCategorias =>({
            ...preCategorias,
            menu: preCategorias.menu.filter(categoria => categoria.idCategoria !== idEliminar)
        }))
    }

    return (
        <>
        <div className="contenedorCategoria">
            <h2 className="categoria-titulo">{nameCategoria}</h2>
            {imgCategoria && <img src={imgCategoria} alt="" />}
            <div className="contenedorBotones">
                <button className="papeleraCategoria"
                onClick={()=>EliminarCategoria(idCategoria)}> <Trash2 /> </button> 
                <button className="modificarCategoria"> <Pencil /> </button>
                <button className="insertarCategoria" 
                    onClick={()=>setMostrarInsertar(!mostrarInsertar)}> <Plus /> </button>
            </div> 
        </div>   
        { mostrarInsertar && (
            <InsertarCategoria
                categorias={categorias}
                setCategorias={setCategorias}
                onCategoriaInsertada={()=>setMostrarInsertar(false)}
                />
        )} 
        {listaProductos}
            
        </>
    )

}
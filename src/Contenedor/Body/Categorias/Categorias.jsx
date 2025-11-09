import Producto from "./Productos/Producto"
import InsertarCategoria from "./InsertarCategoria.jsx"
import { Trash2, Pencil, Plus } from 'lucide-react'
import { useState } from "react"


export default function Categorias({idCategoria,nameCategoria,imgCategoria,arrayProductos,categorias,setCategorias}) {

    console.log(`Categoria: ${nameCategoria}, ID: ${idCategoria}`)

    const[mostrarInsertar,setMostrarInsertar]=useState(false)

    const listaProductos = arrayProductos.map(producto =>
        <Producto 
            key = {producto.idProduct}
            nombreProducto = {producto.name}
            precioProducto = {producto.price}            
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
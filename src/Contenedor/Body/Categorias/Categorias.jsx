import Producto from "./Productos/Producto"
import InsertarCategoria from "./InsertarCategoria.jsx"
import { Trash2, Pencil, Plus } from 'lucide-react'
import { useState } from "react"


export default function Categorias({idCategoria,nameCategoria,imgCategoria,arrayProductos,categorias,setCategorias}) {

    const[mostrarInsertar,setMostrarInsertar]=useState(false)

    const listaProductos = arrayProductos.map(producto =>
        <Producto 
            key = {producto.idProduct}
            nombreProducto = {producto.name}
            precioProducto = {producto.price}            
         />
    )

    return (
        <>
        <div className="contenedorCategoria">
            <h2 className="categoria-titulo">{nameCategoria}</h2>
            {imgCategoria && <img src={imgCategoria} alt="" />}
            <div className="contenedorBotones">
                <button className="papeleraCategoria"> <Trash2 /> </button> 
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
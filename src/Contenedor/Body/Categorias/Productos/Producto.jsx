import "../../Body.css"
import InsertarProducto from "./InsertarProducto.jsx"
import { Trash2, Pencil, Plus } from 'lucide-react';
import { useState } from "react";

export default function Producto({
    idProducto,
    nombreProducto,
    precioProducto,
    idCategoria,
    arrayProductos,
    onProductoEliminado,
    onProductoInsertado    
}){
    const [mostrarInsertarProducto, setMostrarInsertarProducto] = useState(false)
    
    const eliminarProducto =() => {
        if (onProductoEliminado) {
            onProductoEliminado(idProducto,idCategoria)
        }
    }

    const insertarProducto = (nuevoProducto) => {
        if (onProductoInsertado){
            onProductoInsertado(idCategoria,nuevoProducto)
        }
        setMostrarInsertarProducto(false)
    }


    return(
        <>
        <div className="contenedorProducto">
            <div className="infoProducto">
                <span className="name">{nombreProducto}</span>
                <span className="price">{precioProducto}€</span>
            </div>
            <div className="contenedorBotones">
                <button className="papeleraProducto"
                        onClick = {eliminarProducto}> 
                    <Trash2 size={14} /> </button> 
                <button className="modificarProducto"> <Pencil size={14}/> </button>
                <button className="insertarProducto" 
                    onClick={()=>setMostrarInsertarProducto(!mostrarInsertarProducto)}> <Plus size={14} /> </button>
            </div>
    </div>
    { mostrarInsertarProducto && (
            <InsertarProducto
                arrayProductos={arrayProductos}
                onProductoInsertado={insertarProducto}
                
            />
        )} 
    </>
    )
}
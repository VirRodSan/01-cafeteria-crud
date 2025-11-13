import "../../Body.css"
import InsertarProducto from "./InsertarProducto.jsx"
import { Trash2, Pencil, Plus } from 'lucide-react';
import { useState } from "react";
import ModificarProducto from "./ModificarProducto.jsx";

export default function Producto({
    idProducto,
    nombreProducto,
    precioProducto,
    idCategoria,
    setCategorias,
    onProductoEliminado    
}){
    const[mostrarModificarProducto,setMostrarModificarProducto]=useState(false)
    
    const eliminarProducto = () => {
        if (onProductoEliminado) {
            onProductoEliminado(idProducto,idCategoria)
        }
    }

    const productoActual ={
        idProduct: idProducto,
        name: nombreProducto,
        price: precioProducto
    }

    return(
        <>
        <div className="contenedorProducto">
            <div className="infoProducto">
                <span className="name">{nombreProducto}</span>
                <span className="price">{precioProducto}€</span>
            </div>
            <div className="contenedorBotones">
                <button 
                    className="papeleraProducto"
                    onClick={eliminarProducto}> 
                    <Trash2 size={14} /> </button> 
                <button className="modificarProducto"
                    onClick={()=>setMostrarModificarProducto(!mostrarModificarProducto)}
                > <Pencil size={14}/> </button>
            </div>    
        </div>
        { mostrarModificarProducto && (
                    <ModificarProducto
                        producto = {productoActual}
                        idCategoria={idCategoria}
                        setCategorias = {setCategorias}
                        onProductoModificado = {()=>setMostrarModificarProducto(false)}
                    />
                )}   
    </>
    )
}
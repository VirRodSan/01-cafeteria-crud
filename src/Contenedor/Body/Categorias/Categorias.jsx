import Producto from "./Productos/Producto"
import "../Body.css"
import { Trash2, Pencil } from 'lucide-react';


export default function Categorias({idCategoria,nameCategoria,imgCategoria,arrayProductos}) {

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
            <img src={imgCategoria} alt="" />
            <div className="contenedorBotones">
                <button className="papeleraCategoria"> <Trash2 /> </button> 
                <button className="modificarCategoria"> <Pencil /> </button>
            </div> 
        </div>    
                {listaProductos}
            
        </>
    )

}
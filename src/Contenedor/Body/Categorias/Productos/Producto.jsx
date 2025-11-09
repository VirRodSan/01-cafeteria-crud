import "../../Body.css"
import { Trash2, Pencil } from 'lucide-react';

export default function Producto({idProducto,nombreProducto,precioProducto}){

    return(
    <div className="contenedorProducto">
        <div className="infoProducto">
        <span className="name">{nombreProducto}</span>
        <span className="price">{precioProducto}€</span>
        </div>
        <div className="contenedorBotones">
                <button className="papeleraProducto"> <Trash2 size={14} /> </button> 
                <button className="modificarProducto"> <Pencil size={14}/> </button>
        </div>
    </div>

    )
}
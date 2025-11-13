import { useState } from "react";

export default function ModificarProducto({
    producto,
    idCategoria,
    setCategorias,
    onProductoModificado
})
{
    const [nombreProductoModificado, setNombreProductoModificado] = useState(producto.name)
    const [precioProductoModificado, setPrecioProductoModificado] = useState(producto.price)
    
    const guardarCambios= () => {
        if(!nombreProductoModificado.trim() || !precioProductoModificado) return
        
        const precio = parseFloat(precioProductoModificado)
        
        if (isNaN(precio) || precio <= 0) return

        setCategorias(prev => ({
            ...prev,
            menu:prev.menu.map(categoria=> {
                if (categoria.idCategoria === idCategoria) {
                    return {
                        ...categoria,
                        products: categoria.products.map(prod =>
                            prod.idProduct === producto.idProduct
                            ? {...prod,
                                name: nombreProductoModificado,
                                price: precio
                            }
                            :prod
                        )
                    }
                }
                return categoria
            })
        }))

        if (onProductoModificado){
            onProductoModificado()
        }
        
    }

    return(
            <div className="modificarProducto">
            <input
                type="text"
                value={nombreProductoModificado}
                onChange={(e) => setNombreProductoModificado(e.target.value)}
                placeholder="Nombre del producto"
            />
            <input
                type="number"
                value={precioProductoModificado}
                onChange={(e) => setPrecioProductoModificado(e.target.value)}
                placeholder="Precio"
            />
            <button onClick={guardarCambios}>Guardar</button>
        </div>
        )

}
import { useState } from "react"

export default function InsertarProducto({
    arrayProductos,
    onProductoInsertado
}){
    
    const [nuevoProducto, setNuevoProducto] = useState({name:"",price:""})

    const incluirProducto = () => {
        if(!nuevoProducto.name.trim() || !nuevoProducto.price)
            return
        const precio = parseFloat(nuevoProducto.price)
        if (isNaN(precio) || precio <= 0) 
            return

        const ultimoId = arrayProductos.length > 0 ? 
            Math.max(...arrayProductos.map(prod => prod.idProduct)) : 0

        const producto = {
            idProduct: ultimoId+1,
            name: nuevoProducto.name,
            price: precio
        }
        if (onProductoInsertado) {
            onProductoInsertado(producto)
        }
        setNuevoProducto({name:"",price:""})
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            incluirProducto()
        }
    }
    
    return(
        <div className="insertarCategoria">
            <input 
                type="text" 
                placeholder="Producto..." 
                value={nuevoProducto.name}
                onChange={(e) => setNuevoProducto(prev => ({...prev, name: e.target.value}))}
                onKeyDown={handleKeyDown}
            />
            <input 
                type="number" 
                placeholder="...€"
                value={nuevoProducto.price}
                onChange={(e) => setNuevoProducto(prev => ({...prev, price: e.target.value}))}
                onKeyDown={handleKeyDown}
            />
            <button onClick={incluirProducto}>Añadir Producto</button>
        </div>
    )
}
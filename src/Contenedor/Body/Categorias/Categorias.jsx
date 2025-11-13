
import { Trash2, Pencil, Plus } from 'lucide-react'
import { useState } from "react"
import InsertarProducto from './Productos/InsertarProducto'
import Producto from './Productos/Producto'
import ModificarCategoria from './ModificarCategoria'
export default function Categorias({
    idCategoria,
    nameCategoria,
    imgCategoria,
    arrayProductos,
    setCategorias}) {

    const[mostrarInsertarProducto,setMostrarInsertarProducto]=useState(false)
    const[mostrarModificarCategoria,setMostrarModificarCategoria]=useState(false)
        const controlProductoEliminado = (idProductoEliminar, idCategoriaOrigen) => {
            setCategorias(prev => ({
                ...prev,
                menu: prev.menu.map(categoria => {
                    if (categoria.idCategoria === idCategoriaOrigen) {
                        return {
                            ...categoria,
                            products: categoria.products.filter(producto =>
                                producto.idProduct !== idProductoEliminar
                            )
                        }
                    }

                    return categoria
                }
                )
            })
            )
        }
        const controlProductoInsertado = (nuevoProducto) => {
            setCategorias(prev => ({
                ...prev,
                menu: prev.menu.map(categoria => {
                    if (categoria.idCategoria === idCategoria) {
                        return {
                            ...categoria,
                            products:[...categoria.products, nuevoProducto]
                        }
                    }
                    return categoria
                })
            }))
            setMostrarInsertarProducto(false)
        }



        const listaProductos = arrayProductos.map(producto =>
        <Producto 
            key = {producto.idProduct}
            idProducto={producto.idProduct}
            nombreProducto = {producto.name}
            precioProducto = {producto.price}
            idCategoria={idCategoria}
            setCategorias={setCategorias}
            onProductoEliminado={controlProductoEliminado}
        />
    )

        const EliminarCategoria = (idEliminar) => {
            setCategorias(preCategorias =>({
                ...preCategorias,
                menu: preCategorias.menu.filter(categoria => categoria.idCategoria !== idEliminar)
        }))
    }

        const categoriaActual = {
            idCategoria,
            nameCategoria,
            imgCategoria
        }

    return (
        <>
        <div className="contenedorCategoria">
            <h2 className="categoria-titulo">{nameCategoria}</h2>
            {imgCategoria && <img src={imgCategoria} alt="" />}
            <div className="contenedorBotones">
                <button className="papeleraCategoria"
                onClick={()=>EliminarCategoria(idCategoria)}> <Trash2 /> </button> 
                <button className="modificarCategoria"
                    onClick={()=>setMostrarModificarCategoria(!mostrarModificarCategoria)}> <Pencil /> </button>
                <button className="insertarProducto" 
                    onClick={()=>setMostrarInsertarProducto(!mostrarInsertarProducto)}> <Plus /> </button>
            </div> 
        </div>
        { mostrarModificarCategoria && (
            <ModificarCategoria 
                categoria={categoriaActual}
                setCategorias={setCategorias}
                onCategoriaModificada={()=>setMostrarModificarCategoria(false)}
            />
        )}   
        { mostrarInsertarProducto && (
            <InsertarProducto
                idCategoria={idCategoria}
                arrayProductos={arrayProductos}
                onProductoInsertado={controlProductoInsertado}
                />
        )} 
        {listaProductos}
            
        </>
    )

}
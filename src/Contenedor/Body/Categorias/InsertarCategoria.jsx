import { useState } from "react"

export default function InsertarCategoria({setCategorias, onCategoriaInsertada}){
    
    const [nuevaCategoria,setNuevaCategoria] = useState("")
    
    const incluirCategoria = () => {
        //Nos aseguramos de que se escriba texto
        if (!nuevaCategoria.trim()) return

        //Nos aseguramos que preCategoris contiene el estado actual
        setCategorias(preCategorias => {
            // Hacemos copia del menu actual o devolvemos vacío si no hay nada
            const menu = preCategorias.menu || []
            // Averiguamos cuál es el último id existente
            const ultimoId = menu.length > 0 ? 
                Math.max(...menu.map(cat => cat.idCategoria)) : 0
            
            // Creamos el nuevo objeto categoria
            const nuevaCategoriaObjeto = {
                idCategoria: ultimoId +1 ,
                nameCategoria: nuevaCategoria,
                imgCategoria:"",
                products:[]
            }
            
            return{
                ...preCategorias,
                menu:[...menu,nuevaCategoriaObjeto]
            }
        })
        setNuevaCategoria("")
        if (onCategoriaInsertada){
            onCategoriaInsertada()
        }
    }   
    //Si el usuario pulsa enter llamamos a la función
    const handleKeyDown  =(e) => {
        if (e.key === 'Enter'){
            incluirCategoria()
        }
    }
    
    return(
        <div className="insertarCategoria">
            <input 
                type="text" 
                placeholder="Categoria..." 
                value={nuevaCategoria}
                onChange={(e) => setNuevaCategoria(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={incluirCategoria}>Añadir Categoria</button>
        </div>

    )
}
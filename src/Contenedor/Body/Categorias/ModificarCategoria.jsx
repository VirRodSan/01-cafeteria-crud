import { useState } from "react";

export default function ModificarCategoria({
    categoria,
    setCategorias,
    onCategoriaModificada
}) {
    const [categoriaModificada, setCategoriaModificada] = useState(categoria.nameCategoria)
    const [imagenModificada, setImagenModificada] = useState(categoria.imgCategoria || "")

    const guardarCambios = () => {
        if(!categoriaModificada.trim()) return
        setCategorias(prev => ({
            ...prev,
            menu:prev.menu.map(cat =>
                cat.idCategoria === categoria.idCategoria
                ? {
                    ...cat,
                    nameCategoria: categoriaModificada,
                    imgCategoria: imagenModificada
                }
                : cat
            )
        }))
        if (onCategoriaModificada) {
            onCategoriaModificada()
        }
        const handleKeyDown  =(e) => {
        if (e.key === 'Enter'){
            incluirCategoria()
        }
    }
    }
    return(
         <div className="modificarCategoria">
            <input
                type="text"
                value={categoriaModificada}
                onChange={(e) => setCategoriaModificada(e.target.value)}
                placeholder="Nombre de categoría"
            />
            <input
                type="text"
                value={imagenModificada}
                onChange={(e) => setImagenModificada(e.target.value)}
                
                placeholder="URL de imagen (opcional)"
            />
            <button onClick={guardarCambios}>Guardar</button>
        </div>
    )
}
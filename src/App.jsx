import './App.css'
import Contenedor from "./Contenedor/Contenedor"
export default function App() {
  const categorias = {
    "menu":[
     {
      "idCategoria":1,
      "nameCategoria":"Coffee",
      "imgCategoria":"https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg",
      "products": [
        { "idProduct":1,"name": "French Vanilla", "price": 3.00 }, // Tenemos que poner id a cada elemento, para que no se confunda en el .map
        { "idProduct":2,"name": "Caramel Macchiato", "price": 3.75 },
        { "idProduct":3,"name": "Pumpkin Spice", "price": 3.50 },
        { "idProduct":4,"name": "Hazelnut", "price": 4.00 },
        { "idProduct":5,"name": "Mocha", "price": 4.50 }
      ]},
      {
      "idCategoria":2,
      "nameCategoria": "Desserts",
      "imgCategoria": "https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg",
      "products": [
        { "idProduct":6,"name": "Donut", "price": 1.50 },
        { "idProduct":7,"name": "Cherry Pie", "price": 2.75 },
        { "idProduct":8,"name": "Cheesecake", "price": 3.00 },
        { "idProduct":9,"name": "Cinnamon Roll", "price": 2.50 }
      ]
      }
  ]
  }
  return (
    <div className='fondo'>
      <section className='contenedor'>
        <Contenedor categorias={categorias}/>
      </section>
   </div>
  
  )
}
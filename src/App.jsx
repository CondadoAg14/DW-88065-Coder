import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./containers/ItemListContainer.jsx";
import ItemDetailContainer from "./containers/ItemDetailContainer.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* Ruta principal - todos los productos */}
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a mi tienda online!" />} />
        
        {/* Ruta por categoría */}
        <Route path="/categoria/:categoryId" element={<ItemListContainer greeting="¡Bienvenido a mi tienda online!" />} />
        
        {/* Ruta de detalle de producto */}
        <Route path="/producto/:productId" element={<ItemDetailContainer />} />
        
        {/* Ruta 404 */}
        <Route path="*" element={<h2>Página no encontrada (404)</h2>} />
      </Routes>
    </div>
  );
}

export default App;
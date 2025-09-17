import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

function NavBar() {
  return (
    <nav>
      <h1>MiTienda</h1>
      <ul>
        {/* Ruta al catálogo completo */}
        <li><Link to="/">Inicio</Link></li>

        {/* Rutas dinámicas de categorías */}
        <li><Link to="/category/ropa">Ropa</Link></li>
        <li><Link to="/category/calzado">Calzado</Link></li>
        <li><Link to="/category/accesorios">Accesorios</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
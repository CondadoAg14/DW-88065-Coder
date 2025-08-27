import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <h1>MiTienda</h1>
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
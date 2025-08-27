import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>MiTienda</h1>
      <ul style={styles.navLinks}>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
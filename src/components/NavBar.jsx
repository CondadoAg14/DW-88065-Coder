import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">MiTienda</NavLink>
      <ul className="nav-links">
        <li><NavLink to="/" end>Inicio</NavLink></li>
        <li><NavLink to="/categoria/ropa">Ropa</NavLink></li>
        <li><NavLink to="/categoria/electronica">Electrónica</NavLink></li>
        <li><NavLink to="/cart">Carrito</NavLink></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
import React from "react";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="item-card">
      <img src={producto.img} alt={producto.nombre} className="item-img" />
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <Link to={`/producto/${producto.id}`} className="btn-detalle">
        Ver Detalle
      </Link>
    </div>
  );
}

export default Item;
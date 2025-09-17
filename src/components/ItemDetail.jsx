import React from "react";
import ItemCount from "./ItemCount.jsx";

function ItemDetail({ producto }) {
  return (
    <div className="item-detail">
      <img src={producto.img} alt={producto.nombre} className="item-detail-img" />
      <div className="item-detail-info">
        <h2>{producto.nombre}</h2>
        <p>Precio: ${producto.precio}</p>
        <p>Categoría: {producto.categoria}</p>
        <p>{producto.descripcion}</p>
        <ItemCount stock={10} initial={1} onAdd={(cantidad) => console.log(`Agregaste ${cantidad} unidades`)} />
      </div>
    </div>
  );
}

export default ItemDetail;
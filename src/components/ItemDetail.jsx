import React, { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import ItemCount from "./ItemCount.jsx";

function ItemDetail({ producto }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (cantidad) => {
    addItem(producto, cantidad);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <img src={producto.imagen} alt={producto.nombre} width={200} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>

      {added ? (
        <p>Producto agregado ✅</p>
      ) : (
        <ItemCount stock={producto.stock} onAdd={handleAdd} />
      )}
    </div>
  );
}

export default ItemDetail;
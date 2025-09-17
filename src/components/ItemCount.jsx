import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handleAdd = () => {
    onAdd(cantidad);
  };

  return (
    <div className="item-count">
      <button onClick={decrementar}>-</button>
      <span>{cantidad}</span>
      <button onClick={incrementar}>+</button>
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
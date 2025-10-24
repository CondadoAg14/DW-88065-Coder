import React, { useState } from "react";

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const aumentar = () => {
    if (count < stock) setCount(count + 1);
  };

  const disminuir = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <div className="count-controls">
        <button onClick={disminuir}>−</button>
        <span className="count-number">{count}</span>
        <button onClick={aumentar}>+</button>
      </div>

      <button className="btn-add-cart" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
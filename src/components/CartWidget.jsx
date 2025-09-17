import React from "react";

function CartWidget({ cantidad = 0 }) {
  return (
    <div className="cart-widget">
      🛒
      {cantidad > 0 && <span className="cart-count">{cantidad}</span>}
    </div>
  );
}

export default CartWidget;
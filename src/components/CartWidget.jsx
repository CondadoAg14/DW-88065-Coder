import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      🛒
      {totalItems() > 0 && (
        <span className="cart-count">{totalItems()}</span>
      )}
    </Link>
  );
}

export default CartWidget;
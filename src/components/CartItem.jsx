import React from "react";
import { useCart } from "../context/CartContext.jsx";

function CartItem({ producto }) {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <h4>{producto.nombre}</h4>
      <p>Cantidad: {producto.cantidad}</p>
      <p>Subtotal: ${producto.precio * producto.cantidad}</p>
      <button onClick={() => removeItem(producto.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;
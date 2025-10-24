import React from "react";
import { useCart } from "../context/CartContext.jsx";

function CartItem({ producto }) {
  const { removeItem } = useCart();
  const precio = Number(producto.precio) || 0;
  const cantidad = Number(producto.cantidad) || 0;
  const subtotal = precio * cantidad;

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{producto.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Subtotal: ${subtotal.toLocaleString("es-AR")}</p>
      </div>
      <button className="btn-eliminar" onClick={() => removeItem(producto.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import CartItem from "./CartItem.jsx";

function Cart() {
  const { cart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {cart.map((p) => (
        <CartItem key={p.id} producto={p} />
      ))}
      <h3>Total: ${totalPrice()}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
}

export default Cart;
import React, { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../data/firebaseConfig.js";

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ nombre: "", email: "" });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const order = {
        buyer,
        items: cart,
        total: totalPrice(),
        date: serverTimestamp(), // ✅ fecha generada por Firestore
      };
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  if (orderId)
    return <h2>✅ ¡Compra realizada! ID de orden: {orderId}</h2>;

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <button type="submit">Confirmar compra (${totalPrice()})</button>
    </form>
  );
}

export default CheckoutForm;
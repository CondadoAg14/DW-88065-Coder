import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (producto, cantidad) => {
    const itemExistente = cart.find((p) => p.id === producto.id);
    if (itemExistente) {
      setCart(cart.map((p) =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + cantidad } : p
      ));
    } else {
      setCart([...cart, { ...producto, cantidad }]);
    }
  };

  const removeItem = (id) => setCart(cart.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);
  const totalItems = () => cart.reduce((acc, p) => acc + p.cantidad, 0);
  const totalPrice = () => cart.reduce((acc, p) => acc + p.cantidad * p.precio, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail.jsx";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../data/firebaseConfig.js";

function ItemDetailContainer() {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const ref = doc(db, "productos", productId);
        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.warn("Producto no encontrado");
          setProducto(null);
        }
      } catch (error) {
        console.error("Error al obtener producto:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProducto();
  }, [productId]);

  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado 😕</p>;

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
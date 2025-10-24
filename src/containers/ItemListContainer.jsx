import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../data/firebaseConfig.js";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosRef = collection(db, "productos");
        const q = categoryId
          ? query(productosRef, where("categoria", "==", categoryId))
          : productosRef;

        const snapshot = await getDocs(q);
        const productos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(productos);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, [categoryId]);

  return (
    <section>
      <h2>{greeting}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : items.length > 0 ? (
        <ItemList productos={items} />
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </section>
  );
}

export default ItemListContainer;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { getProductos } from "../data/productos";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductos()
      .then((data) => {
        const filtrados = categoryId
          ? data.filter((p) => p.categoria === categoryId)
          : data;
        setItems(filtrados);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <section>
      <h2>{greeting}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList productos={items} />}
    </section>
  );
}

export default ItemListContainer;
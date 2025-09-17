import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail.jsx";
import { getProductoById } from "../data/productos.js";

function ItemDetailContainer() {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProductoById(productId)
      .then((res) => setProducto(res))
      .catch((err) => console.error("Producto no encontrado"))
      .finally(() => setLoading(false));
  }, [productId]);

  return (
    <section>
      {loading && <p>Cargando producto...</p>}
      {producto && <ItemDetail producto={producto} />}
    </section>
  );
}

export default ItemDetailContainer;
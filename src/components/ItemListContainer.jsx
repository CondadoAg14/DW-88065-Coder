import React from "react";

function ItemListContainer({ greeting }) {
  return (
    <section style={styles.container}>
      <h2>{greeting}</h2>
    </section>
  );
}

export default ItemListContainer;

import React from "react";

function CartWidget() {
  return (
    <div style={styles.cart}>
      🛒
      <span style={styles.badge}>3</span>
    </div>
  );
}


export default CartWidget;
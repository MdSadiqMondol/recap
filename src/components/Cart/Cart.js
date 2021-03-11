import React from "react";


const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price * (product.quantity);
  }
  return (
    <div>
      <h4>order summery</h4>
      <p>Items Ordered:{cart.length}</p>
      <h1>total:{total}</h1>
      <br />
      {
        props.children
      }
    </div>
  );
};

export default Cart;

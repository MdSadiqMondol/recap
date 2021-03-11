import React from "react";
import { useEffect, useState } from "react";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import image from '../../images/giphy.gif'
const Review = () => {
  const [cart, setCart] = useState([]);
  const [order,setOrder] = useState(false);

  const handleOrder = () => {
    setCart([]);
    setOrder(true);
    processOrder();
  }
  const handleRemove = (productKey) => {
    const newCart = cart.filter((x) => x.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    const save = getDatabaseCart();
    const productKey = Object.keys(save);

    const counts = productKey.map((key) => {
      const product = fakeData.find((x) => x.key === key);
      product.quantity = save[key];
      return product;
    });
    setCart(counts);
  }, []);
  let thanks;
  if(order){
    thanks = <img src={image} alt=""/>
  }

  return (
    <div className="shop-container">
      <div div className = "product-con" >
        <h1>this nis {cart.length}</h1>
        {cart.map((x) => (
          <ReviewItem
            key={x.key}
            handleRemove={handleRemove}
            product={x}
          ></ReviewItem>
        ))}
        {
          thanks
        }
      </div>
      <div div className = "card-con" >
          
          <Cart cart={cart}>
             < button onClick={handleOrder} className = "main-btn" > order </button>
          </Cart>
      </div>

    </div>
  );
};

export default Review;

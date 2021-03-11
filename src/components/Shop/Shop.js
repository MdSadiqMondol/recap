import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { Link } from "react-router-dom";

function Shop(props) {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCard] = useState([]);
  useEffect(() => {
    const save = getDatabaseCart();
    const productKey = Object.keys(save);
    const previousCart = productKey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = save[key];
      return product;
    });
    setCard(previousCart);
  }, []);

  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const same = cart.find((x) => x.key === product.key);
    let count = 1;
    let newCart;
    if (same) {
      count = same.quantity + 1;
      same.quantity = count;
      const other = cart.filter((x) => x.key !== toBeAddedKey);
      newCart = [...other, same];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCard(newCart);

    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="shop-container">
      <div className="product-con">
        {products.map((x) => (
          <Product
            key={x.key}
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
            product={x}
          ></Product>
        ))}
      </div>
      <div className="card-con">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="main-btn"> review</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
}

export default Shop;

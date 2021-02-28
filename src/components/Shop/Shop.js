import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';

function Shop(props) {
    
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart,setCard] = useState([])
    
    const handleAddProduct = (product) =>{
        const newCart = [...cart,product];
        setCard(newCart)

    }
    return (
        <div className="shop-container">
             <div className="product-con">
                  {
                      products.map(x => <Product
                        handleAddProduct={handleAddProduct}
                         product={x}
                      ></Product> )
                 }
             </div>
             <div className="card-con">
                 <Cart cart={cart}></Cart>
             </div>
        </div>
    );
}

export default Shop;
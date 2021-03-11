import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key} = props.product;
    return (
        <div>
           <h3 className="product-name">{name}</h3>
           <p>quantity: {quantity}</p>
           < button className = "main-btn" onClick={()=> props.handleRemove(key)} > remove </button>
        </div>
    );
};

export default ReviewItem;
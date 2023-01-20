import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="container">
      <img src={props.src} alt="" />
      <div className="info">
        <h4>{props.title}</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          omnis natus.
        </p>
        <h5>${props.price}</h5>
      </div>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductCard;

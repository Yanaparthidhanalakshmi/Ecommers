import React from 'react';
import { useLocation } from 'react-router-dom'

const ProductPage = () => {
  let loc = useLocation();
  let data = loc.state.x;

  return (
    <div className="product-container">
      <img src={data.image} alt={data.title} />
      <h1 className="product-title">{data.title}</h1>
      <b className="product-price">${data.price}</b>
      <h3 className="product-rating">{data.rating.rate} ⭐</h3>
    </div>
  );
};

export default ProductPage;

import React from 'react';

import { useCart } from '../../Context/Cart';

import { ProductItem } from './styles';

const Product = ({ product }) => {
  const { dispatch } = useCart();

  const addProduct = item => {
    dispatch({ type: 'ADD_TO_CART', item });
  };

  return (
    <ProductItem>
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <span>{product.priceFormatted}</span>
      <button type="button" onClick={() => addProduct(product)}>
        <span>ADD TO CART</span>
      </button>
    </ProductItem>
  );
};

export default Product;

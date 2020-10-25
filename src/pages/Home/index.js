<<<<<<< HEAD
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
// import { useCart } from "../context/use-cart";

import { ProductList } from "./styles";

const Home = () => {
  // const { addItem, removeItem, countItemsInCart } = useCart();

  return (
    <div className="home">
      <ProductList>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-puma-flyer-runner/26/D14-6469-026/D14-6469-026_zoom1.jpg?ts=1581113762"
            alt="Sneakers"
          />
          <strong>Nike Sneaker</strong>
          <strong>$69,90</strong>

          <button type="button">
            <div>
              <MdAddShoppingCart sie={16} color="#FFF" />
            </div>
            <span>Add to Cart</span>
          </button>
        </li>

        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-puma-flyer-runner/26/D14-6469-026/D14-6469-026_zoom1.jpg?ts=1581113762"
            alt="Sneakers"
          />
          <strong>Nike Sneaker</strong>
          <strong>$69,90</strong>

          <button type="button">
            <div>
              <MdAddShoppingCart sie={16} color="#FFF" />
            </div>
            <span>Add to Cart</span>
          </button>
        </li>

        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-puma-flyer-runner/26/D14-6469-026/D14-6469-026_zoom1.jpg?ts=1581113762"
            alt="Sneakers"
          />
          <strong>Nike Sneaker</strong>
          <strong>$69,90</strong>

          <button type="button">
            <div>
              <MdAddShoppingCart sie={16} color="#FFF" />
            </div>
            <span>ADD TO CART</span>
          </button>
        </li>
      </ProductList>
    </div>
=======
import React, { useState, useEffect } from 'react';
import { formatPrice } from '../../helpers/util';

import api from '../../services/api';

import { ProductList } from './styles';
import Product from '../../components/Product';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ProductList>
>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8
  );
};

export default Home;

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
  );
};

export default Home;

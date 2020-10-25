import React, { useState, useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import api from "../../services/api";
import { formatPrice } from "../../utils/format";
// import { useCart } from "../context/use-cart";

import { ProductList } from "./styles";

const Home = () => {
  const [products, setProducts] = useState([]);
  // const { addItem, removeItem, countItemsInCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get("products");
      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <strong>${product.price}</strong>

            <button type="button">
              <div>
                <MdAddShoppingCart sie={16} color="#FFF" />
              </div>
              <span>ADD TO CART</span>
            </button>
          </li>
        ))}
      </ProductList>
    </div>
  );
};

export default Home;

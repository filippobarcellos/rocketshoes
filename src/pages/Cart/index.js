import React from "react";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";
import { useCart } from "../../context/use-cart";
import { formatPrice } from "../../utils/format";

import { Container, ProductTable, Total } from "./styles";

const Cart = () => {
  const { cart, removeFromCart, updateQtd, subTotal, totalItems } = useCart();

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => updateQtd(product, product.qtd - 1)}
                  >
                    <MdRemoveCircleOutline size={20} color="7159c1" />
                  </button>
                  <input type="number" readOnly value={product.qtd} />
                  <button
                    type="button"
                    onClick={() => updateQtd(product, product.qtd + 1)}
                  >
                    <MdAddCircleOutline size={20} color="7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{formatPrice(subTotal(product))}</strong>
              </td>
              <td>
                <button type="button" onClick={() => removeFromCart(product)}>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Checkout</button>
        <Total>
          <span>TOTAL</span>
          <strong>{formatPrice(totalItems)}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;

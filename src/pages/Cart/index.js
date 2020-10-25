<<<<<<< HEAD
import React from "react";
=======
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
<<<<<<< HEAD
} from "react-icons/md";
// import { useCart } from "../context/use-cart";
import { Container, ProductTable, Total } from "./styles";

const Cart = () => {
  // const { addItem, removeItem, cart, totalPrice } = useCart();

=======
} from 'react-icons/md';
import { formatPrice } from '../../helpers/util';

import { useCart } from '../../Context/Cart';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const { cart, dispatch } = useCart();

  const cartItems = cart.map(item => ({
    ...item,
    subtotal: formatPrice(item.price * item.quantity),
  }));

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const removeFromCart = id => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  const decrementQtd = item => {
    dispatch({
      type: 'UPDATE_CART',
      payload: {
        item,
        qtd: -1,
      },
    });
  };

  const incrementQtd = item => {
    dispatch({
      type: 'UPDATE_CART',
      payload: {
        item,
        qtd: 1,
      },
    });
  };

>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
<<<<<<< HEAD
            <th>QUANTITY</th>
            <th>PRICE</th>
=======
            <th>QTD</th>
            <th>SUBTOTAL</th>
>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8
            <th />
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-puma-flyer-runner/26/D14-6469-026/D14-6469-026_zoom1.jpg?ts=1581113762"
                alt="Product"
              />
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="7159c1" />
                </button>
                <input type="number" readOnly value={0} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>$200,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
=======
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.title} />
              </td>
              <td>
                <strong>{item.title}</strong>
                <span>{item.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={() => decrementQtd(item)}
                    />
                  </button>
                  <input type="number" readOnly value={item.quantity} />
                  <button type="button">
                    <MdAddCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={() => incrementQtd(item)}
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong>{item.subtotal}</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete
                    size={20}
                    color="#7159c1"
                    onClick={() => removeFromCart(item.id)}
                  />
                </button>
              </td>
            </tr>
          ))}
>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Checkout</button>
        <Total>
          <span>TOTAL</span>
<<<<<<< HEAD
          <strong>$1920,00</strong>
=======
          <strong>{formatPrice(cartTotal)}</strong>
>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8
        </Total>
      </footer>
    </Container>
  );
<<<<<<< HEAD
};

export default Cart;
=======
}
>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8

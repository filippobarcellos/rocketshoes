/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
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

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
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
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Checkout</button>
        <Total>
          <span>TOTAL</span>
          <strong>{formatPrice(cartTotal)}</strong>
        </Total>
      </footer>
    </Container>
  );
}

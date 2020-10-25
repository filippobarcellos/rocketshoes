import produce from 'immer';

import { addItemToCart, removeFromCart, updateCart } from './util';

const initialState = [];

const cart = produce((draft = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case '@cart/ADD':
      addItemToCart(draft, payload);
      return draft;
    case '@cart/REMOVE':
      removeFromCart(draft, payload);
      return draft;
    case '@cart/UPDATE_QTD':
      updateCart(draft, payload.id, payload.qtd);
      return draft;
    default:
      return draft;
  }
});

export default cart;

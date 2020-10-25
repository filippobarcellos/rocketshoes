import React, { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

import { addItemToCart, removeItemFromCart, updateCart } from '../helpers/util';

const initialCart = [];

const cartReducer = (draft, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      addItemToCart(draft, action.item);
      return draft;
    case 'REMOVE_FROM_CART':
      removeItemFromCart(draft, action.id);
      return draft;
    case 'UPDATE_CART':
      updateCart(draft, action.payload.item, action.payload.qtd);
      return draft;
    default:
      return draft;
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useImmerReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error();
  }

  return context;
}

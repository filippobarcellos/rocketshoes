import React, { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { addToCart, removeFromCart, updateQtd } from "../utils/cart";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const initialState = [];

const reducer = (draft, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      addToCart(draft, action.item);
      return;
    case "REMOVE_FROM_CART":
      removeFromCart(draft, action.item);
      return;
    case "UPDATE_QTD":
      updateQtd(draft, action.item, action.qtd);
      return;
    default:
      return draft;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useImmerReducer(reducer, initialState);

  // Actions
  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", item: product });
  const removeFromCart = (product) =>
    dispatch({ type: "REMOVE_FROM_CART", item: product });
  const updateQtd = (product, qtd) =>
    dispatch({ type: "UPDATE_QTD", item: product, qtd });
  const subTotal = (product) => {
    return product.price * product.qtd;
  };
  const totalItems = cart.reduce((total, product) => {
    return total + product.price * product.qtd;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        updateQtd,
        cart,
        subTotal,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

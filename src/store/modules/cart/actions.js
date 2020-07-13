export function addToCart(product) {
  return {
    type: '@cart/ADD',
    payload: product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    payload: id,
  };
}

export function updateQuantity(id, qtd) {
  return {
    type: '@cart/UPDATE_QTD',
    payload: {
      id,
      qtd,
    },
  };
}

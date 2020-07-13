export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const addItemToCart = (draft, itemToAdd) => {
  const productIndex = draft.findIndex(item => item.id === itemToAdd.id);

  if (productIndex >= 0) {
    draft[productIndex].quantity += 1;
  } else {
    draft.push({
      ...itemToAdd,
      quantity: 1,
    });
  }
};

export const removeFromCart = (draft, id) => {
  const productIndex = draft.findIndex(item => item.id === id);

  if (productIndex >= 0) {
    draft.splice(productIndex, 1);
  }
};

export const updateCart = (draft, id, qtd) => {
  const productIndex = draft.findIndex(item => item.id === id);

  if (qtd <= 0) {
    return draft;
  }

  if (productIndex >= 0) {
    draft[productIndex].quantity = Number(qtd);
  }
};

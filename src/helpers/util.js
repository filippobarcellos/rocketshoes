export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const addItemToCart = (draft, item) => {
  const productIndex = draft.findIndex(p => p.id === item.id);

  if (productIndex >= 0) {
    draft[productIndex].quantity += 1;
  } else {
    draft.push({ ...item, quantity: 1 });
  }
};

export const removeItemFromCart = (draft, id) => {
  const productIndex = draft.findIndex(p => p.id === id);

  if (productIndex >= 0) {
    draft.splice(productIndex, 1);
  }
};

export const updateCart = (draft, item, qtd) => {
  const productIndex = draft.findIndex(p => p.id === item.id);

  if (item.quantity < 1) {
    return draft;
  }

  if (productIndex >= 0) {
    draft[productIndex].quantity += Number(qtd);
  }
};

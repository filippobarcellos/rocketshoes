export const addToCart = (draft, item) => {
  const productIndex = draft.findIndex((p) => p.id === item.id);

  if (productIndex >= 0) {
    draft[productIndex].qtd += 1;
  } else {
    draft.push({ ...item, qtd: 1 });
  }
};

export const removeFromCart = (draft, item) => {
  const productIndex = draft.findIndex((p) => p.id === item.id);

  if (productIndex >= 0) {
    draft.splice(productIndex, 1);
  }
};

export const updateQtd = (draft, item, qtd) => {
  const productIndex = draft.findIndex((p) => p.id === item.id);

  if (qtd === 0) return draft;

  return (draft[productIndex].qtd = qtd);
};

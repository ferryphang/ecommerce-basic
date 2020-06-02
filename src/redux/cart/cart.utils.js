export const addItemToCart = (items, itemToAdd) => {
  const itemExist = items.find((item) => item.id === itemToAdd.id);
  if (itemExist) {
    return items.map((item) => {
      if (item.id === itemToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }
  return [...items, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (items, itemToRemove) => {
  const itemExist = items.find((item) => item.id === itemToRemove.id);
  if (itemExist.quantity == 1) {
    return items.filter((item) => item.id != itemToRemove.id);
  }

  return items.map((item) => {
    if (item.id === itemToRemove.id) {
      return { ...item, quantity: item.quantity - 1 };
    } else {
      return item;
    }
  });
};
export const clearItemFromCart = (items, itemToRemove) => {
  return items.filter((item) => item.id != itemToRemove.id);
};

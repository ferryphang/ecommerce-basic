import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartToggle = createSelector(
  [selectCart],
  (cart) => cart.toggle
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartItemsCounter = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulated, item) => accumulated + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulated, item) => accumulated + item.quantity * item.price,
    0
  )
);

import { CartTypes } from './cart.types';

export const toggleCart = () => ({
  type: CartTypes.TOGGLE_CART,
});
export const addCart = (item) => ({
  type: CartTypes.ADD_CART,
  payload: item,
});
export const removeItemCart = (item) => ({
  type: CartTypes.REMOVE_ITEM_CART,
  payload: item,
});

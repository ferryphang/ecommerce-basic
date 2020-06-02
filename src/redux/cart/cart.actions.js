import { CartTypes } from './cart.types';

export const toggleCart = () => ({
  type: CartTypes.TOGGLE_CART,
});
export const addCart = (item) => ({
  type: CartTypes.ADD_CART,
  payload: item,
});
export const removeCart = (item) => ({
  type: CartTypes.REMOVE_CART,
  payload: item,
});
export const clearItemCart = (item) => ({
  type: CartTypes.CLEAR_ITEM_CART,
  payload: item,
});

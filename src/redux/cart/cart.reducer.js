import { CartTypes } from './cart.types';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from './cart.utils';
const INITIAL_STATE = {
  toggle: false,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case CartTypes.ADD_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartTypes.REMOVE_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartTypes.CLEAR_ITEM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default CartReducer;

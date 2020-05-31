import { CartTypes } from './cart.types';
import { addItemToCart } from './cart.utils';
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
    default:
      return state;
  }
};
export default CartReducer;

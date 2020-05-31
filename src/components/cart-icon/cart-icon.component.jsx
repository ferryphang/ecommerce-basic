import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCart } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCart, cartItems }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <div className="item-count">{cartItems.length}</div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

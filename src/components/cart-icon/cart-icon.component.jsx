import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCounter } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <div className="item-count">{itemCount}</div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCounter,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

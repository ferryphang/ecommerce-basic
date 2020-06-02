import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemCart,
  addCart,
  removeCart,
} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItemCart, addCart, removeCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeCart(cartItem)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemCart: (item) => dispatch(clearItemCart(item)),
  addCart: (item) => dispatch(addCart(item)),
  removeCart: (item) => dispatch(removeCart(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);

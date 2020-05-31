import React from 'react';
import { connect } from 'react-redux';
import { addCart } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addCart(item)}>
        {' '}
        Add to Cart{' '}
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCart: (item) => dispatch(addCart(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);

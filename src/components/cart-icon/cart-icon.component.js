import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => {
  console.log('cart-icon called');
  return {
    itemCount: cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    ),
  };
};

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount,
// });

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

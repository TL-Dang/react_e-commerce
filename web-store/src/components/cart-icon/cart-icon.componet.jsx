import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = function () {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = function () {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;

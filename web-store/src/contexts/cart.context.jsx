import { createContext, useState, useEffect } from 'react';

const addCartItem = function (cartItems, productToAdd) {
  //find if cartItem contains production
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //Return new array w/ modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = function ({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(
    function () {
      const newCartCount = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );
      setCartCount(newCartCount);
    },
    [cartItems]
  );

  const addItemToCart = function (productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

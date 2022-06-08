import React, { createContext, useState } from "react";

const CartContext = createContext("");

function CartArrayProvider({ children }) {
  const [cartItems, setCartItems] = useState();
  const obj = {
    cartItems: cartItems,
    setCartItems: setCartItems,
  };
  return <CartContext.Provider value={obj}>{children}</CartContext.Provider>;
}

export default CartArrayProvider;
export { CartContext };


//Title, {author, img src, count}
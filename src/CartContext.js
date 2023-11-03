import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(storedCart);

  const saveCartToLocal = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const addToCart = (item, quantity = 1) => {
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      // Si l'élément est déjà dans le panier, mettez à jour sa quantité
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      });
      setCart(updatedCart);
      saveCartToLocal(updatedCart);
    } else {
      // Sinon, ajoutez l'élément avec la quantité spécifiée
      const updatedCart = [...cart, { ...item, quantity }];
      setCart(updatedCart);
      saveCartToLocal(updatedCart);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    saveCartToLocal(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart'); // Supprimez les données du panier du localStorage
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

import React from 'react';
import { useCart } from '../../CartContext';
import '../../styles/Cart/Cart.css';

function Cart() {
  const { cart, removeFromCart, clearCart, addToCart } = useCart();

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleIncreaseQuantity = (item) => {
    addToCart(item, 1); // Augmente la quantité de 1
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      addToCart(item, -1); // Diminue la quantité de 1
    }
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="Cart">
      <h1>Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>{item.quantity} x {item.price} €</span>
                  <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                  <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Supprimer</button>
                </li>
              );
            })}
          </ul>
          <div className="total">
            Total : {getTotal()} €
          </div>
          <button onClick={clearCart}>Vider le panier</button>
        </div>
      )}
    </div>
  );
}

export default Cart;





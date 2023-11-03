import { useCart } from '../../CartContext';
import "../../styles/Product/Products.css";
import { toast } from 'react-toastify';
import React, { useState } from 'react';

function ProductItem({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1); // Initialisez la quantité à 1 par défaut

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    // Utilisez la fonction addToCart pour ajouter le produit au panier avec la quantité sélectionnée
    addToCart(product, quantity);
    toast.success(`"${product.name}" a été ajouté au panier avec ${quantity} unité(s).`, {
      position: "top-right",
    });
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <h5>{product.price} €</h5>
      <p>{product.details}</p>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min={1} // Empêche la quantité d'être inférieure à 1
      />
      <button onClick={handleAddToCart}>Ajouter au panier</button>
    </div>
  );
}

export default ProductItem;
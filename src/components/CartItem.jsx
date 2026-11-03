import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, removeItem, updateQuantity } from '../redux/CartSlice.jsx';

export default function CartItem({ navigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const calculateTotalAmount = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const calculateTotalCost = item => item.price * item.quantity;
  const calculateCartTotal = () => cartItems.reduce((sum, item) => sum + calculateTotalCost(item), 0);
  const handleIncrement = item => dispatch(updateQuantity({ id:item.id, quantity:item.quantity + 1 }));
  const handleDecrement = item => dispatch(updateQuantity({ id:item.id, quantity:item.quantity - 1 }));
  const handleDelete = item => dispatch(removeItem(item.id));
  const handleCheckout = () => setShowComingSoon(true);
  const handleContinueShopping = () => navigate('products');
  return <main className="container">
    <div className="intro"><h1>Shopping Cart</h1><p>Review your plant selections</p></div>
    <div className="cart-layout">
      <section>
        {cartItems.length === 0 && <p>Your cart is empty. Discover your next favourite plant!</p>}
        {cartItems.map(item => <article className="cart-row" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>Unit price: ${item.price.toFixed(2)}</p>
            <p>Total: ${calculateTotalCost(item).toFixed(2)}</p>
            <div className="quantity">
              <button onClick={() => handleDecrement(item)} aria-label="Decrease quantity">−</button>
              <strong>{item.quantity}</strong>
              <button onClick={() => handleIncrement(item)} aria-label="Increase quantity">+</button>
              <button className="delete" onClick={() => handleDelete(item)}>Delete</button>
            </div>
          </div>
        </article>)}
      </section>
      <aside className="cart-summary">
        <h2>Order Summary</h2>
        <div className="summary-line"><span>Total Plants:</span><b>{calculateTotalAmount()}</b></div>
        <div className="summary-line"><span>Total Cost:</span><b>${calculateCartTotal().toFixed(2)}</b></div>
        <button className="primary" onClick={handleCheckout}>Checkout</button>
        {showComingSoon && <p role="status" className="checkout-note">Coming Soon!</p>}
        <button className="secondary" onClick={handleContinueShopping}>Continue Shopping</button>
      </aside>
    </div>
  </main>;
}
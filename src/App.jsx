import React, { useState } from 'react';
import Navbar, { ProductList } from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import AboutUs from './components/AboutUs.jsx';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const navigate = nextPage => { setPage(nextPage); window.scrollTo(0,0); };
  return <div className="site">
    <Navbar page={page} navigate={navigate} />
    {page === 'home' && <><header className="landing-page background-image">
      <div className="landing-content">
        <span>BRING NATURE HOME</span>
        <h1>Welcome to Paradise Nursery</h1>
        <p>Discover plants that make every day greener, calmer, and brighter.</p>
        <button className="primary get-started-button" onClick={() => navigate('products')}>Get Started</button>
      </div>
    </header><AboutUs /></>}
    {page === 'products' && <ProductList />}
    {page === 'cart' && <CartItem navigate={navigate} />}
    <footer>© 2026 Paradise Nursery · Grow something wonderful 🌿</footer>
  </div>;
}
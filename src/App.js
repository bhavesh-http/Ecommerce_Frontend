
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Siderbar/Sidebar';
import ProductGallery from './components/ProductGallery/ProductGallery';
import Navbar from './components/Navbar/Navbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Footer from './components/Footer/Footer';
import ElectronicsPage from './components/Electronic/Electronic';
import HelpDesk from './components/Helpdesk/Helpdesk';
import MenuPage from './components/Menu/Menu';
import Cart from './components/cart/Cart';
import OrderPage from './components/Order/OrderPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('imageGallery');
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem.name === item.name 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.name !== item.name));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const openOrderPage = () => {
    setOrderOpen(true);
    setCartOpen(false);
  };

  const closeOrderPage = () => {
    setOrderOpen(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      {/* Conditional rendering for Cart and OrderPage */}
      {cartOpen && (
        <Cart 
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          placeOrder={openOrderPage}
          closeCart={closeCart}
        />
      )}
      {orderOpen && (
        <OrderPage 
          cartItems={cartItems}
          closeOrderPage={closeOrderPage}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      )}

      <div className="app">
        <Navbar cartItems={cartItems} toggleCart={toggleCart} onSearch={handleSearch} />
        <div className="main-content">
          <Sidebar onPageChange={handlePageChange} />
          {currentPage === 'imageGallery' && (
            <>
              <ProductGallery addToCart={addToCart} />
              <ImageGallery 
                addToCart={addToCart}
                searchQuery={searchQuery}
              />
            </>
          )}
          {currentPage === 'electronics' && <ElectronicsPage addToCart={addToCart} />}
          {currentPage === 'menu' && <MenuPage />}
          {currentPage === 'helpDesk' && <HelpDesk />}
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

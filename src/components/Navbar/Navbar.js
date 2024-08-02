
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaCartArrowDown } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import './Navbar.css';

const categories = [
  { name: 'Grocery' },
  { name: 'Beauty & Makeup' },
  { name: 'Electronics' },
  { name: 'Furniture' },
  { name: 'Fashion' },
  { name: 'Bakery' },
];

const Navbar = ({ cartItems, toggleCart, onSearch }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    email: '',
    gender: '',
    age: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAccountClick = () => {
    setShowRegister(true);
  };

  const closeRegister = () => {
    setShowRegister(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData); // Debugging log

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Server response:', data); // Debugging log
      setFormData({
        name: '',
        mobile: '',
        address: '',
        email: '',
        gender: '',
        age: '',
      });
      setSuccessMessage('You have successfully registered!');
      setTimeout(() => setSuccessMessage(''), 5000); // Clear message after 50 seconds
      closeRegister();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <>
      <nav className="navbar" style={{ position: 'fixed' }}>
        <div className="navbar-logo">
          <FaShoppingCart className="shopping-cart" />
          <span>Shopping</span>
        </div>
        <div className="navbar-search">
          <FaSearch className="search" />
          <input
            type="text"
            placeholder="Searching for..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <select>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="navbar-icons">
          <VscAccount onClick={handleAccountClick} className="clickable-icon" />
          <FaCartArrowDown onClick={toggleCart} className="clickable-icon" />
          <div className="cart-badge">{cartItems.length}</div>
        </div>
      </nav>

      {showRegister && (
        <div className="register-modal">
          <div className="register-content">
            <span className="close-btn" onClick={closeRegister}>
              &times;
            </span>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="mobile">Mobile No</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />

              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </>
  );
};

export default Navbar;

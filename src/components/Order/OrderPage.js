
import React, { useState } from 'react';
import './OrderPage.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const OrderPage = ({ cartItems, closeOrderPage, removeFromCart, clearCart }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [paymentType, setPaymentType] = useState('creditCard');
    const [emiOption, setEmiOption] = useState('noEmi');
    const [orderSuccess, setOrderSuccess] = useState(false);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (parseFloat(item.price.replace('₹', '')) * item.quantity), 0).toFixed(2);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const totalPrice = calculateTotalPrice();
        const orderDetails = { name, address, paymentType, emiOption, cartItems, totalPrice };

        try {
            const response = await axios.post('http://localhost:8000/api/order', orderDetails);
            console.log('Order placed with details:', response.data);
            setOrderSuccess(true);
            setName('');
            setAddress('');
            setPaymentType('creditCard');
            setEmiOption('noEmi');
            clearCart(); // Clear the cart
        } catch (error) {
            console.error('There was an error placing the order:', error);
        }
    };

    const handleRemove = (item) => {
        removeFromCart(item);
    };

    return (
        <div className={`order-modal ${orderSuccess ? 'blur-background' : ''}`}>
            <div className="order-content">
                <button className="close-btn" onClick={closeOrderPage}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <h2>Order Summary</h2>
                {cartItems.length === 0 ? (
                    <p className="empty-cart-message">Nothing to order</p>
                ) : (
                    <>
                        <ul className="order-items">
                            {cartItems.map((item, index) => (
                                <li key={index} className="order-item">
                                    <img src={item.src} alt={item.name} />
                                    <div>
                                        <span className="name">{item.name}</span>
                                        <span className="price">₹{parseFloat(item.price.replace('₹', '')).toFixed(2)}</span>
                                        <span className="quantity">Quantity: {item.quantity}</span>
                                        <button className="remove-btn" onClick={() => handleRemove(item)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="order-total">
                            <span>Total Price: </span>
                            <span className="total-price">₹{calculateTotalPrice()}</span>
                        </div>
                        <form className="order-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address:</label>
                                <textarea
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="payment-type">Payment Type:</label>
                                <select
                                    id="payment-type"
                                    value={paymentType}
                                    onChange={(e) => setPaymentType(e.target.value)}
                                    required
                                >
                                    <option value="creditCard">Credit Card</option>
                                    <option value="debitCard">Debit Card</option>
                                    <option value="paypal">PayPal</option>
                                    <option value="bankTransfer">Bank Transfer</option>
                                    <option value="Cash on delivery">Cash on delivery</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="emi-option">EMI Option:</label>
                                <select
                                    id="emi-option"
                                    value={emiOption}
                                    onChange={(e) => setEmiOption(e.target.value)}
                                    required
                                >
                                    <option value="noEmi">No EMI</option>
                                    <option value="3Months">1 Months EMI</option>
                                    <option value="6Months">3 Months EMI</option>
                                    <option value="12Months">5 Months EMI</option>
                                    <option value="12Months">10 Months EMI</option>
                                    <option value="12Months">13 Months EMI</option>
                                    <option value="12Months">16 Months EMI</option>
                                    <option value="12Months">19 Months EMI</option>
                                </select>
                            </div>
                            <button type="submit" className="place-order-button">Place Order</button>
                        </form>
                    </>
                )}
                {orderSuccess && (
                    <div className="order-success-message">
                        <h5>Order has been successfully placed!</h5>
                        <button onClick={() => {
                            setOrderSuccess(false);
                            closeOrderPage();
                        }}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderPage;

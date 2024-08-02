
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, closeCart, placeOrder }) => {
    const handleRemove = (item) => {
        console.log('Removing item:', item);
        removeFromCart(item);
    };

    return (
        <div className="cart-modal">
            <div className="cart">
                <button className="close-btn" onClick={closeCart}>×</button>
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul className="cart-items">
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.src} alt={item.name} />
                                <div>
                                    <span className="name">{item.name}</span>
                                    <span className="price">{item.price}</span>
                                    <span className="quantity">Quantity: {item.quantity}</span>
                                    <button className="remove-button" onClick={() => handleRemove(item)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <button className="order-button" onClick={placeOrder}>Order Now</button>
            </div>
        </div>
    );
};

export default Cart;

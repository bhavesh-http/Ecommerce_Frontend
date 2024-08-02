import React from 'react';
import './Electronic.css'; 

import img1 from '../images/21.png';
import img2 from '../images/22.png';
import img3 from '../images/23.png';
import img4 from '../images/24.jpeg';
import img5 from '../images/25.png';
import img6 from '../images/26.png';
import img7 from '../images/27.png';
import img8 from '../images/28.png';
import img9 from '../images/product01.png';
import img10 from '../images/product02.png';

const electronics = [
    { src: img1, name: "Laptop", price: "₹1000.00" },
    { src: img2, name: "Smartphone", price: "₹800.00" },
    { src: img3, name: "Tablet", price: "₹600.00" },
    { src: img4, name: "Smartwatch", price: "₹200.00" },
    { src: img5, name: "Headphones", price: "₹150.00" },
    { src: img6, name: "Camera", price: "₹500.00" },
    { src: img7, name: "Speaker", price: "₹100.00" },
    { src: img8, name: "Monitor", price: "₹300.00" },
    { src: img9, name: "LAptop 2", price: "₹300.00" },
    { src: img10, name: "Headphone 2", price: "₹300.00" },
];

const ElectronicsPage = ({ addToCart }) => {
    return (
        <div className="image-gallery">
            {electronics.map((item, index) => (
                <div key={index} className="image-item">
                    <img src={item.src} alt={`Gallery ₹{index + 1}`} />
                    <div className="image-details">
                        <span className="name">{item.name}</span>
                        <span className="price">{item.price}</span>
                        <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ElectronicsPage;

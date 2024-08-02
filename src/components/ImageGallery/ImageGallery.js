

import React from 'react';
import './ImageGallery.css'; 

import img1 from '../images/16.png';
import img2 from '../images/17.png';
import img3 from '../images/18.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import img9 from '../images/9.png';

const images = [
    { src: img1, name: "Broccoli", price: "₹10.00" },
    { src: img2, name: "Cabbage", price: "₹12.00" },
    { src: img3, name: "Cauliflower", price: "₹15.00" },
    { src: img4, name: "Red cabbage", price: "₹8.00" },
    { src: img5, name: "Pearl Onion", price: "₹20.00" },
    { src: img6, name: "Onion", price: "₹25.00" },
    { src: img7, name: "Garlic", price: "₹30.00" },
    { src: img8, name: "Peas", price: "₹18.00" },
    { src: img9, name: "Lemon", price: "₹22.00" }
];

const ImageGallery = ({ addToCart, searchQuery }) => {
    const filteredImages = images.filter(image => 
        image.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="image-gallery">
            {filteredImages.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image.src} alt={`Gallery ${index + 1}`} />
                    <div className="image-details">
                        <span className="name">{image.name}</span>
                        <span className="price">{image.price}</span>
                        <button className="add-to-cart" onClick={() => addToCart(image)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;


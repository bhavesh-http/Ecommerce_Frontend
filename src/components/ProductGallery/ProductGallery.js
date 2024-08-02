// src/components/ProductGallery.jsx
import React from 'react';
import './ProductGallery.css';
// Import local images
import story1 from '../images/story-1.jpg';
import story2 from '../images/story-2.jpg';
import story3 from '../images/story-3.jpg';
import story4 from '../images/story-4.jpg';
import story5 from '../images/story-5.jpg';
import story6 from '../images/story-6.jpg';
import story7 from '../images/story-1.jpg'; // Go up one directory level
import story8 from '../images/story-2.jpg';
import story9 from '../images/story-3.jpg';
import story10 from '../images/story-4.jpg';
import story11 from '../images/story-5.jpg';
import story12 from '../images/story-6.jpg';




const images = [
    story1,
    story2,
    story3,
    story4,
    story5,
    story6,
    story7,
    story8,
    story9,
    story10,
    story11,
    story12,

    // Add more image imports or URLs
];

const ProductGallery = () => {
    return (
        <>
        <div className="product-gallery">
            {images.map((image, index) => (
                <div key={index} className="image-container">
                    <img src={image} alt={`Product ${index}`} />
                </div>
            ))}
        </div>
       
    </>
    );
};

export default ProductGallery;

import React from 'react';
import { Card,  Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';

// Import images
import img1 from '../images/111.jpg';
import img2 from '../images/112.jpg';
import img3 from '../images/113.jpeg';
import img4 from '../images/114.jpg';
import img5 from '../images/115.jpeg';
import img6 from '../images/117.jpg';
import img7 from '../images/118.jpeg';
import img8 from '../images/119.jpeg';
import img9 from '../images/15.png';


// Sample data for menu items with images
const menuItems = [
    { id: 1, name: 'Strawberry', price: '₹230', image: img1 },
    { id: 2, name: 'Apple',      price: '₹200', image: img2 },
    { id: 3, name: 'Grapes',     price: '90',   image: img3 },
    { id: 4, name: 'Pineapple',  price: '₹130', image: img4 },
    { id: 5, name: 'Kiwi',       price: '₹234', image: img5 },
    { id: 6, name: 'Aavacado',   price: '₹300', image: img6 },
    { id: 7, name: 'Orange',     price: '₹80',  image: img7 },
    { id: 8, name: 'Pomegranate',price: '₹150', image: img8 },
    { id: 8, name: 'Banana',     price: '₹100', image: img9 },
    // Add more items as needed
];

const MenuPage = () => {
    return (
        <div className="container" >
            <h2 className="mb-4">Menu</h2>
            <Row>
                {menuItems.map(item => (
                    <Col md={4} key={item.id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={item.image} alt={item.name} className="menu-item-image" />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                {/* <Card.Text>{item.description}</Card.Text> */}
                                <Card.Text><strong>{item.price}</strong></Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MenuPage;



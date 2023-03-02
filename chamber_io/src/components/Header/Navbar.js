import { Button, Navbar, Modal, Nav } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import { CartContext } from '../../CartContext';
import CartProduct from './CartProduct';
import bgVideo from '../../images/bgVideo.mp4';
import { motion } from 'framer-motion';
import './nav_landing.css';



function NavbarComponent() {
    // does'nt allow cart to pop up on initial render of the main page 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cart = useContext(CartContext); //allows us to use any function from CartContext

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: cart.items }) // passes cart to lineItems in backend 
        }).then(response => {
            return response.json(); //session is created - response back here
        }).then(response => {
            if (response.url) {
                window.location.assign(response.url); //forwards user to stripe
            }
        })
    }
    // total count of all products inside the cart - reduce will add the total of quantity starting at 0
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <motion.div
                transition={{
                    duration: 1
                }}
                initial={{
                    y: 0,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }} className="landing_page">
                <Navbar expand="sm" className="sticky-top">
                    <Navbar.Brand className='nav_logo' href="/">Chamber.IO</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link className='nav_links' href="/#about">About</Nav.Link>
                        <Nav.Link className='nav_links' href="/#ticket">Tickets</Nav.Link>
                        <Nav.Link className='nav_links instagram-link' href="https://www.instagram.com/chamber.io/" target="_blank" rel="noopener noreferrer">
                    <span className="link-text">Instagram</span>
                    </Nav.Link>                    
                    </Nav>
                    {/* when ready to restart purchases, uncomment the button */}
                        {/* <Button variant="danger" onClick={handleShow} className="nav_btn"> Cart ({productsCount} Items)</Button> */}
                    </Navbar.Collapse>
                </Navbar>
                {/* onHide handles the closing of the modal either by X or outside modal screen */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Shopping Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {productsCount > 0 ?
                            <>
                                {/* used CartProduct component to display current products in cart */}
                                <h5>Items in your cart:</h5>
                                {cart.items.map((currentProduct, idx) => (
                                    <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                                ))}
                                {/* toFixed rounds values to 2 values after the decimal .00 */}
                                <div className='purchase_total'>
                                    <h2>Total: ${cart.getTotalCost().toFixed(2)}</h2>
                                    <Button className='purchase_btn' variant="success" onClick={checkout}>
                                        Purchase
                                    </Button>
                                </div>
                                {/* goes to checkout function above ^ when clicked */}
                            </>
                            :
                            <h1 className='no_items'>There are no items in your cart!</h1>
                        }
                    </Modal.Body>
                </Modal>

                <video className="video_bg" autoPlay loop muted playsInline>
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <motion.div transition={{
                    duration: 2
                }}
                    initial={{
                        y: 30,
                        opacity: 0,
                        from: { y: -30 }
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        to: { y: 30 }
                    }} className="hero_container">
                    <h1 className='title_landing'>Chamber.IO</h1>
                    <h4 className='title_desc'>In-person dance training and blockchain art</h4>
                </motion.div>

            </motion.div>
        </>
    )
}

export default NavbarComponent;
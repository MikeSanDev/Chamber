import { Button, Navbar, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from '../../CartContext';
import CartProduct from './CartProduct';
import './nav_landing.css';



function NavbarComponent() {
    // doenst allow cart to pop up on initial render of the main page 
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
            body: JSON.stringify({ items: cart.items }) // passes cart to lineItems in backened 
        }).then(response => {
            return response.json(); //session is created - response back here
        }).then(response => {
            if (response.url) {
                window.location.assign(response.url); //forwards user to strpe
            }
        })
    }
    // total count of all products inside the cart - reduce will add the total of quantity starting at 0
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <div className="landing_page">
                <Navbar expand="sm">
                    <Navbar.Brand className='nav_logo' href="/">Chamber.IO</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="danger" onClick={handleShow} className="nav_btn"> Cart ({productsCount} Items)</Button>
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
                                {/* used CartProduct componenet to display current products in cart */}
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

                <video src="/images/bgVideo.mp4" autoPlay muted loop className="video_bg" />
                <div className="hero_container">
                    <h1 className='title_landing'>Chamber.IO</h1>
                    <h4 className='title_desc'>In-person dance training and blockchain art</h4>
                </div>

            </div>
        </>
    )
}

export default NavbarComponent;
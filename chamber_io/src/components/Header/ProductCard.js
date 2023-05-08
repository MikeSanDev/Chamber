import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';
import './productCard.css';



const styles = {
    cardImage: {
        objectFit: 'cover',
        width: '100%',
        height: 'auto'
    }
}

function ProductCard(props) { // props.product is the product we are selling

    const product = props.product;
    const cart = useContext(CartContext); //allows us to use any function from CartContext
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items) //array of empty items in CartContext

    return (
        <Card className='one_card'>
            <Card.Img variant="top" src={product.image} style={styles.cardImage} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle>{product.description}</Card.Subtitle>
                <Card.Text>${product.price}</Card.Text>
                {/* {productQuantity > 0 ?   //logic on adding/subtracting quantity buttons
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">r
                                <Button sm="6" className="ms-2" onClick={() => cart.addOneToCart(product.id)} >+</Button>
                                <Button sm="6" className="ms-2" onClick={() => cart.removeOneFromCart(product.id)} >-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                    </>
                    :
                } */}
                {/* to reactivate - move button about the } ^ and uncomment the ternary operator */}
                    <Button className="all_btn"  >Available Fall 2023</Button>
                    {/* onClick={() => cart.addOneToCart(product.id)} */} 
                    {/* move the onClick event to the button above ^ */}
            </Card.Body>
        </Card>
    )
}

export default ProductCard; 
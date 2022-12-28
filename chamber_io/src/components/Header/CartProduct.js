import './cartProduct.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { CartContext } from '../../CartContext';
import { useContext } from "react";
import { getProductData } from "../../productsStore";



function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <div className="single_product">
                <div className='cart_block1'>
                    <Image variant="fluid" src={productData.image} className="img-thumbnail" />
                </div>

                <div className="cart_block2">
                    <h4>{productData.title}</h4>
                    <p>{quantity} total</p>
                    <p>${(quantity * productData.price).toFixed(2)}</p>
                    <Button size="md" variant="danger" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
                </div>
            </div>
            <hr></hr>
        </>
    )

}

export default CartProduct;

// This component is the cart display component - displays items that are in the cart 
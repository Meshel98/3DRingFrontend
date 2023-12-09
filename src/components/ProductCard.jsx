import React, { useContext } from 'react';
import { CartContext } from '../CartContext';


function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    return (

        <div className="card   font-bold glass2 ">

            <div className="  card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                {productQuantity > 0 ? (
                    <>
                        <div className="card-form " >
                            <span className="card-form-label">In Cart: {productQuantity}</span>
                            <div>
                                <button className="card-button " onClick={() => cart.addOneToCart(product.id)}>+</button>
                                <button className="card-button" onClick={() => cart.removeOneFromCart(product.id)}>-</button>
                            </div>
                        </div>
                        <button className="card-button card-button-danger" onClick={() => cart.deleteFromCart(product.id)}>Remove from cart</button>
                    </>
                ) : (
                    <button className="card-button" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</button>
                )}
            </div>

        </div>
    );
}

export default ProductCard;

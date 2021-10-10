import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import React, { useContext } from 'react';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';


const Cart = props => {
    const cartCtx = useContext(CartContext);


    const cart = cartCtx.items;
    const totalAmount = cartCtx.totalAmount.toFixed(2);

    const cartItemAddHandler = () => {

    }

    const cartItemRemoveHandler = () => {

    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cart.map(item => <CartItem price={item.price} amount={item.amount} name={item.name} onRemove={cartItemRemoveHandler} onAdd={cartItemAddHandler} />)}
        </ul>
    )
    return (
        <Modal onCloseCart={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;
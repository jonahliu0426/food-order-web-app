import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import React, { useContext } from 'react';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';


const Cart = props => {
    const cartCtx = useContext(CartContext);


    const cart = cartCtx.items;
    const totalAmount = cartCtx.totalAmount.toFixed(2);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({
            ...item,
            amount: 1,
        });
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cart.map(item => <CartItem
                key={item.id}
                price={item.price}
                amount={item.amount}
                name={item.name}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)} />)}
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
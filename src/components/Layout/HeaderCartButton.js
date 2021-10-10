import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import React, { useContext } from 'react';
import CartContext from '../store/cart-context';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfItemInCart = cartCtx.items.reduce((curr, item) => {
        return curr + item.amount;
    }, 0)

    return (
        <button className={classes.button} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItemInCart}</span>
        </button>
    )
}

export default HeaderCartButton

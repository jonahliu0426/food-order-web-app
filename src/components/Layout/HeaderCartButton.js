import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../store/cart-context';

const HeaderCartButton = (props) => {
    const [isBtnHighlighted, setIsBtnHighlighted] = useState(true);

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const btnClasses = `${classes.button} ${isBtnHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setIsBtnHighlighted(true);

        const timer = setTimeout(() => {
            setIsBtnHighlighted(false);
        }, 100)

        return () => { clearTimeout(timer) }
    }, [items]);

    const numberOfItemInCart = cartCtx.items.reduce((curr, item) => {
        return curr + item.amount;
    }, 0)

    return (
        <button className={btnClasses} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItemInCart}</span>
        </button>
    )
}

export default HeaderCartButton

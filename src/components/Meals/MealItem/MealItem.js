import React, { useContext } from "react";
import classes from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = props => {
    const price = `$${props.price.toFixed(2)}`;

    const cartCtx = useContext(CartContext);

    const addItemToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount,
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                <div>{price}</div>
            </div>
            <div><MealItemForm id={props.id} onAddToCart={addItemToCartHandler} /></div>
        </li>
    )
}

export default MealItem;
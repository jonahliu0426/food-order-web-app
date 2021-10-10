import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import React, { useState, useRef } from 'react';


const MealItemForm = props => {
    const [isAmountValid, setIsAmountValid] = useState(true);

    const amountInputRef = useRef();

    const addItemToCartHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 10
        ) {
            setIsAmountValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={addItemToCartHandler}>
            <Input label="Amount" ref={amountInputRef}
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!isAmountValid && <p>Please select amount no more than 10</p>}
        </form>
    )
}

export default MealItemForm;
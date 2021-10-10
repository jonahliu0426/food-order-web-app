import CartContext from "./cart-context";
import React, { useReducer } from "react";

const defalutCartState = {
    items: [],
    totalAmont: 0,
}


const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        // concat doesn't edit existing array but return a new array, do not modify the input array.
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmont + (action.item.price * action.item.amount)
        return {
            items: updatedItems,
            totalAmont: updatedTotalAmount,
        }
    }
    if (action.type === 'REMOVE') {
        const updatedItems = [...state.items];
        const removedItem = updatedItems.splice(action.id, 1);
        const updatedTotalAmount = state.totalAmont - (removedItem.price * removedItem.amount);
        return {
            items: updatedItems,
            totalAmont: updatedTotalAmount,
        }
    }
    return defalutCartState
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defalutCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: 'ADD',
            item: item,
        })
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id,
        })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmont,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
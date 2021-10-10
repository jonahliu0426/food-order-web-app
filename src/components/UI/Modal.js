import classes from './Modal.module.css';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onCloseCart} />
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const modalOverlay = document.getElementById('overlay');

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, modalOverlay)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalOverlay)}
        </Fragment>
    )
};



export default Modal;
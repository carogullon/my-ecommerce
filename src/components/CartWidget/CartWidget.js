import React from 'react';
import {Icon} from "semantic-ui-react";
import './CartWidget.css';


const CartWidget = () => {
    return (
        <div className="cartWidget">Checkout
            <Icon corner name='cart' size='big' color='red'/>
        </div>
    )
}

export default CartWidget;
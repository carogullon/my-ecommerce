import React from 'react';
import {Icon} from "semantic-ui-react";
import './CartWidget.css';


const CartWidget = () => {
    return (
        <div className="cartWidget">
            <Icon corner name='cart' size='big' color='grey'/>
        </div>
    )
}

export default CartWidget;
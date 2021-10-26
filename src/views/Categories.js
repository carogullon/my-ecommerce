import React from 'react'
import {Link} from 'react-router-dom';
import './views.css';
import {Icon} from "semantic-ui-react";




const Categories = () => {
    return (
        <nav className="NavBar">
            <ul className="productos">
                <Link to={`/`} className="item">Productos</Link>
                <Link to={`/category/${'mochilas'}`} className="item">Mochilas</Link>
                <Link to={`/category/${'rinioneras'}`} className="item">Riñoneras</Link>
                <Link to={`/category/${'carteras'}`} className="item">Carteras</Link>
                <Link to={`/checkout`} className="cartWidget">Checkout (0)
                    <Icon corner name='cart' size='big' /></Link>
            </ul>
        </nav>
           
    )
}

export default Categories;
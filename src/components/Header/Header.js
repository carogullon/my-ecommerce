import React from 'react';
import './Header.css';
import img from './VK.png';
import {Link} from 'react-router-dom';

const Header = ({greeting}) => {
    return (
        <div className="Header">
            <Link to="/">
                <img src={img} alt="logo-vk" width="150px" />
            </Link>    
            <h1 className="titlePag">{greeting}</h1>
           
        </div>
    )
}

export default Header

import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul className="productos">
                <NavLink to= "/" className="item">Home</NavLink>
                <NavLink to= "/mochilas" className="item">Mochilas</NavLink>
                <NavLink to= "/rinioneras" className="item">Riñoneras</NavLink>
                <NavLink to= "/carteras" className="item">Carteras</NavLink>
            </ul>
            <CartWidget></CartWidget>
        </nav>
    );
}

export default NavBar;
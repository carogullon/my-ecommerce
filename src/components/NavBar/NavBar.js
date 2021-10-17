import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul className="productos">
                <Link to= "/" className="item">Home</Link>
                <Link to= "/mochilas" className="item">Mochilas</Link>
                <Link to= "/rinioneras" className="item">Riñoneras</Link>
                <Link to= "/carteras" className="item">Carteras</Link>
            </ul>
            <CartWidget></CartWidget>
        </nav>
    );
}

export default NavBar;
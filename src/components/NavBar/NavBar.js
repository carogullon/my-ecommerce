import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul className="productos">
                <li className="item">
                    <a href="mochilas.html">Mochilas</a>
                </li>
                <li className="item">
                    <a href="rinioneras.html">Riñoneras</a>
                </li>
                <li className="item">
                    <a href="carteras.html">Cartersa</a>
                </li>
                <li className="item">
                    <a href="accesorios.html">Accesorios</a>
                </li>
            </ul>
            <CartWidget></CartWidget>
        </nav>
    );
}

export default NavBar;
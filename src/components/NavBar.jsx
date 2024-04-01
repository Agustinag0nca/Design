import { NavLink } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import CartWidget from "./CartWidget/CartWidget" 

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <h3>Design Club</h3>
            </Link>

            <div className="Categories">
                <NavLink to="/category/DiseñoDeAplicacionWeb" className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>
                    Diseño de Aplicación Web
                </NavLink>
                <NavLink to="/category/ReparacionDeErroresWeb" className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>
                    Reparación de Errores Web
                </NavLink>
                <NavLink to="/category/MaquetacionWeb" className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>
                    Maquetación Web
                </NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
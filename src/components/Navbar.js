import logo from "../logo_test.png";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./styles/ButtonContainer";
import { NavWrapper } from "./styles/NavContainer";

export default function Navbar() {
    return (
        <NavWrapper className="navbar navbar-expand sm navbar-dark px-sm-5">
            <Link to="/">
                <img src={logo} alt="loja" className="navbar-brand"width="90px" height="90px"/>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        <strong>Products</strong>
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2 ml-1">
                        <i className="fas fa-shopping-cart"/> Shopping Cart
                    </span>
                </ButtonContainer>
            </Link>
        </NavWrapper>
    )
}


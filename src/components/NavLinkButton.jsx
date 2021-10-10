// import classes from './NavLinkButton.module.scss'
import { NavLink } from "react-router-dom"

const NavLinkButton = (props) => {
    return (
        <NavLink to={props.path}>
            <button>{props.children}</button>
        </NavLink>
    );
}

export default NavLinkButton
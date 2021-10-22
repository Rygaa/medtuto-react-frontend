// import classes from './NavLinkButton.module.scss'
import { NavLink } from "react-router-dom"
import classes from './NavLinkButton.module.scss'
const NavLinkButton = (props) => {
    return (
        <NavLink to={props.path} className={classes.navLink}>
            <img src={props.img}/>
            <p>{props.text}</p>
        </NavLink>
    );
}

export default NavLinkButton
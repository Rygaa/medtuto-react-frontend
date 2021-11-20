// import classes from './NavLinkButton.module.scss'
import { NavLink } from "react-router-dom"
import classes from '../assets/5-components/NavLinkButton.module.scss'
const NavLinkButton = (props) => {
    return (
        <NavLink to={props.path} className={classes.navLink}>
            <img src={props.img} className={(props.path == '/' ? classes['img-logo'] : classes['img-'])} alt={'nav-link'}/>
            <p>{props.text}</p>
        </NavLink>
    );
}

export default NavLinkButton
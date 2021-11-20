// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import classes from '../assets/4-layout/Header.module.scss'
import logo from '../img/logo.png'
import Nav from "./Nav";

const Header = (props) => {
    return(
        <header className={classes.header}>
            <NavLink className={classes['nav-link']} to={'/home'}><img src={logo} alt={'logo'}></img></NavLink>
            <Nav></Nav>
        </header>
    );
}

export default Header;
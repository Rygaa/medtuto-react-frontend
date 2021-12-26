// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import classes from '../assets/4-layout/Header.module.scss'
import logo from '../img/logo.png'
import Nav from "./Nav";
import { useEffect, useState } from "react";
import NavDropdown from "./NavDropdown";

const Header = (props) => {
    const [isDropdownMenu, setDropDownMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => { window.innerWidth < 800 ? setDropDownMenu(true) : setDropDownMenu(false); })
        window.innerWidth < 800 ? setDropDownMenu(true) : setDropDownMenu(false);
    }, [])

    return(
        <header className={classes.header}>
            <NavLink 
     
                className={classes['nav-link']} to={'/home'}
                onClick={() => window.location.reload()}
                ><img src={logo} alt={'logo'}></img></NavLink>
            {!isDropdownMenu && <Nav></Nav>}
            {isDropdownMenu && <NavDropdown></NavDropdown>}
            
        </header>
    );
}

export default Header;
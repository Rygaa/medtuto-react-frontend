// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import classes from '../assets/4-layout/Header.module.scss'
import logo from '../img/logo.png'
import Nav from "./Nav";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavDropdown from "./NavDropdown";
const animation = {
    hidden: {
        y: -100,
    },
    visible: {
        y: 0,
        transition: {
            duration: 1,
        }
    },
}
const Header = (props) => {
    const [isDropdownMenu, setDropDownMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => { window.innerWidth < 800 ? setDropDownMenu(true) : setDropDownMenu(false); })
        window.innerWidth < 800 ? setDropDownMenu(true) : setDropDownMenu(false);
    }, [])

    return(
        <motion.header className={classes.header}
            variants={animation}
            initial="hidden"
            animate="visible">
            <NavLink 
     
                className={classes['nav-link']} to={'/home'}
                onClick={() => window.location.reload()}
                ><img src={logo} alt={'logo'}></img></NavLink>
            {!isDropdownMenu && <Nav></Nav>}
            {isDropdownMenu && <NavDropdown></NavDropdown>}
            
        </motion.header>
    );
}

export default Header;
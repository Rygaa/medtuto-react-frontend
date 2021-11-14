// import classes from './Header.module.scss'
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom"
import classes from '../assets/4-layout/LeftNav.module.scss'


const LeftNav = (props) => {
    const [NavDropdown, setNavDropDown] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        if (props.dropdown) 
            setNavDropDown(true);
        if (props.dropdown && props.open) 
            setDropdownOpen(true);
        
    }, [])

    return (
        <nav className={props.dropdown ? classes['left-nav-dropdown'] : classes['left-nav']}>
            <NavLink to={'/home'} className={!dropdownOpen ? classes['nav-link'] : classes['nav-link-dropdown']}>Home</NavLink>
            <NavLink to={'/models'} className={!dropdownOpen ? classes['nav-link'] : classes['nav-link-dropdown']}>Learning</NavLink>
            <NavLink to={'/about-us'} className={!dropdownOpen ? classes['nav-link'] : classes['nav-link-dropdown']}>About us</NavLink>
            <NavLink to={'/contact'} className={!dropdownOpen ? classes['nav-link'] : classes['nav-link-dropdown']}>Contact</NavLink>
        </nav> 
    )
}

export default LeftNav;
// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from '../components/NavLinkButton';
import classes from '../assets/4-layout/Nav.module.scss'

import signupIMG from '../img/sign up.png'
import aboutusIMG from '../img/about us.png'
import loginIMG from '../img/login.png'
import logo from '../img/logo.png'
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import RightNav from "./RightNav";
import LeftNav from "./LeftNav";

const Nav = (props) => {
    const isConnected = useSelector((state) => state.user.isConnected)
    const [navDisplay, setNavDisplay] = useState(false)
    const displayButtonRef = useRef();
    const navDisplayOnClick = () => {
        setNavDisplay(!navDisplay)
    }
    function isHidden(el) {
        var style = window.getComputedStyle(el);
        return (style.display === 'none')
    }
    useEffect(() => {
        if (isHidden(displayButtonRef.current)) {
            setNavDisplay(true);
        }
    }, [])
  

    return (
        navDisplay ? 
            <nav className = {classes.nav}>
                <RightNav />
                <LeftNav />
            </nav> :
            <nav>
                <button
                    ref={displayButtonRef}
                    className={classes['nav-button']}
                    onClick={navDisplayOnClick}
                >Display</button>
            </nav>

        
        
    );
}

export default Nav;
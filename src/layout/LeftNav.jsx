// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from '../components/NavLinkButton';
import classes from '../assets/4-layout/LeftNav.module.scss'

import signupIMG from '../img/sign up.png'
import aboutusIMG from '../img/about us.png'
import loginIMG from '../img/login.png'
import logo from '../img/logo.png'
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const LeftNav = (props) => {
    return (
        <nav className={classes['left-nav']}>
            <NavLink to={'/home'} className={classes['nav-link']}>Home</NavLink>
            <NavLink to={'/learning'} className={classes['nav-link']}>Learning</NavLink>
            <NavLink to={'/about-us'} className={classes['nav-link']}>About us</NavLink>
            <NavLink to={'/contact'} className={classes['nav-link']}>Contact</NavLink>
        </nav> 
    )
}

export default LeftNav;
// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from '../components/NavLinkButton';
import classes from '../assets/4-layout/RightNav.module.scss'

import signupIMG from '../img/sign up.png'
import aboutusIMG from '../img/about us.png'
import loginIMG from '../img/login.png'
import logo from '../img/logo.png'
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const RightNav = (props) => {
    const isConnected = useSelector((state) => state.user.isConnected)
    return (!isConnected ?
        <nav className={classes['right-nav']}>
            <NavLink to={'/login'} className={classes['nav-link']}>Login</NavLink>
            <NavLink to={'/sign-up'} className={classes['nav-link']}>Sign up</NavLink>
        </nav> :
        <nav className={classes.nav}>
            <NavLink to={'/about-us'} className={classes['nav-link']}>About us</NavLink>
            <NavLink to={'/my-account'} className={classes['nav-link']}>My Account</NavLink>
        </nav>
    );
}

export default RightNav;
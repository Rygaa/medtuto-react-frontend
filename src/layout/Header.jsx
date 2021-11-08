// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from '../components/NavLinkButton';
import classes from '../assets/4-layout/Header.module.scss'
import signupIMG from '../img/sign up.png'
import loginIMG from '../img/login.png'
import logo from '../img/logo.png'
import Nav from "./Nav";
import { useState } from "react";

const Header = (props) => {
    return(
        <header className={classes.header}>
            <img src={logo}></img>
            <Nav></Nav>
        </header>
    );
}

export default Header;
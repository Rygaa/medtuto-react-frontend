import classes from '../assets/4-layout/Nav.module.scss'
import React from 'react';
import { NavLink } from 'react-router-dom';

const activeClassName = classes['nav-link-active']
const className = classes['nav-link']

const Nav = (props) => {

    return (
        <nav className={classes['nav']}>
            <div className={classes['nav-left-side']}>
                <NavLink
                    to={'/home'}
                    activeClassName={activeClassName}
                    className={className}
                >Home</NavLink>
                <NavLink
                    to={'/models'}
                    activeClassName={activeClassName}
                    className={className}
                >Learning</NavLink>
                <NavLink
                    to={'/about-us'}
                    activeClassName={activeClassName}
                    className={className}
                >About us</NavLink>
            </div>
            <div className={classes['nav-right-side']}>
                <NavLink
                    to={'/login'}
                    activeClassName={activeClassName}
                    className={className}
                >Login</NavLink>
                <NavLink
                    to={'/sign-up'}
                    activeClassName={activeClassName}
                    className={className}
                >Sign up</NavLink>
            </div>
        </nav> 
    );
}

export default Nav;










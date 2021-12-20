import classes from '../assets/4-layout/NavDropdown.module.scss'
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
const activeClassName = classes['nav-link-active']
const className = classes['nav-link']

const navDropDownAnimation = {
    hidden: {
        x: "40vw",
    },
    visible: {
        x: 0,
        transition: {
            duration: .35,
            when: "beforeChildren",
        }
    },
    exit: {
        x: "40vw",
        transition: {
            duration: .15,
        }
    }
}

const elementsAnimation = {
    hidden: {
        x: "30vw",
    },
    visible: {
        x: 0,
        transition: {
            duration: .25,
        }
    },
 
}


const NavDropdown = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location])


    return (
        <div>
            {!isMenuOpen && 
                <button className={classes['menu-button']} onClick={setIsMenuOpen.bind(this, true)}>Menu</button>
            }
            <AnimatePresence>

            {isMenuOpen &&
                    <motion.nav 
                    className={classes['nav-dropdown']} 
                    variants={navDropDownAnimation} 
                    initial="hidden" 
                    animate="visible" 
                    exit="exit"
                    >
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
                </motion.nav>
        
            }
            </AnimatePresence>

            {isMenuOpen && <div className={classes['overlay']} onClick={setIsMenuOpen.bind(this, false)}></div> } 


        </div>
    );
}

export default NavDropdown;










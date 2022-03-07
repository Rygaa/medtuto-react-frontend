import classes from '../assets/4-layout/Nav.module.scss'
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { userActions } from 'store/User/user-slice';

const activeClassName = classes['nav-link-active']
const className = classes['nav-link']

const Nav = (props) => {
    const isConnected = useSelector((state) => state.user.isConnected);
    const dispatch = useDispatch();
    const history = useHistory();

    const disconnectOnClick = (e) => {
        dispatch(userActions.setIdToken(null));
        dispatch(userActions.setIsConnected(false));
        history.push('/home')
    }

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
    
            </div>
            {!isConnected &&
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
            }
            {isConnected &&
                <div className={classes['nav-right-side']}>
                    <NavLink
                        to={'/tutor-panel'} 
                        activeClassName={activeClassName}
                        className={className}
                    >Tutor-Panel</NavLink>
                    <NavLink
                        to={'/my-account'}
                        activeClassName={activeClassName}
                        className={className}
                    >Profile</NavLink>
                    <button className={classes['disconnect-button']} onClick={disconnectOnClick}>Disconnect</button>
                </div>
            }
        </nav> 
    );
}

export default Nav;









